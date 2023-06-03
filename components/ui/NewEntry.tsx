import React, { ChangeEvent, useContext, useState } from "react";
import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import DataSaverOnOutlinedIcon from "@mui/icons-material/DataSaverOnOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { EntriesContext } from "@/context/entries";
import { UIContext } from "@/context/ui";

const NewEntry = () => {
  const { addNewEntry } = useContext(EntriesContext);
  const { setIsAddingentry, isAddingEntry } = useContext(UIContext);

  const [inputValue, setInputValue] = useState("");
  const [touch, setTouch] = useState(false);

  const onChangeTextvalue = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { value } = target;
    setInputValue(value);
  };

  const onSaveValue = () => {
    if (inputValue.length <= 0) return;
    addNewEntry(inputValue);
    setInputValue("");
    setTouch(false);
  };

  return (
    <Box sx={{ marginBottom: 1, paddingX: 2 }}>
      {!isAddingEntry ? (
        <Button
          variant="outlined"
          fullWidth
          startIcon={<AddCircleOutlineOutlinedIcon />}
          onClick={() => setIsAddingentry(true)}
        >
          Add Entry
        </Button>
      ) : (
        <>
          <TextField
            fullWidth
            sx={{ marginTop: 2, marginBottom: 1 }}
            placeholder="New Entry"
            autoFocus
            multiline
            error={inputValue.length <= 0 && touch}
            label="New entry"
            value={inputValue}
            onChange={onChangeTextvalue}
            helperText={inputValue.length <= 0 && touch && "Add one value."}
            onBlur={() => setTouch(true)}
          />
          <Box display="flex" justifyContent="space-between">
            <Button
              variant="text"
              color="secondary"
              onClick={() => {
                setIsAddingentry(false), setTouch(false), setInputValue("");
              }}
            >
              Cancell
            </Button>

            <Button
              variant="outlined"
              color="secondary"
              endIcon={<DataSaverOnOutlinedIcon />}
              onClick={onSaveValue}
            >
              Save
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
};

export default NewEntry;
