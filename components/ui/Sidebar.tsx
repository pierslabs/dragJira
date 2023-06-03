import React, { useContext } from "react";
import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/Inbox";
import MailIcon from "@mui/icons-material/Mail";
import { Box } from "@mui/system";
import { UIContext } from "@/context/ui";

const Sidebar = () => {
  const menuItems: string[] = ["Inbox", "Send Email"];
  const { sidemenuOpen, closeSideMenu } = useContext(UIContext);

  return (
    <Drawer anchor="left" open={sidemenuOpen} onClose={closeSideMenu}>
      <Box sx={{ width: 250 }}>
        <Box sx={{ padding: "5px 10px" }}>
          <Typography variant="h4">Menu</Typography>
          <Divider />
          <List>
            {menuItems.map((text, index) => (
              <ListItemButton key={text}>
                {index % 2 ? <InboxIcon /> : <MailIcon />}

                <ListItemText sx={{ marginLeft: 2 }} primary={text} />
              </ListItemButton>
            ))}
          </List>
          <Divider />
        </Box>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
