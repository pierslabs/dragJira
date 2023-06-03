import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import MenuOutLinedIcon from "@mui/icons-material/MenuOpenOutlined";
import { useContext } from "react";
import { UIContext } from "@/context/ui";
const Navbar = () => {
  const { openSideMenu } = useContext(UIContext);

  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton size="large" edge="start" onClick={openSideMenu}>
          <MenuOutLinedIcon />
        </IconButton>
        <Typography variant="h6">Slabs Jira</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
