import React from "react";
import Box from "@mui/material/Box";
import { LinkContainer } from "react-router-bootstrap";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { headerNavigationArray } from "../../configs/headerConfigs";

const DrawerList = ({ setDrawerStatus }) => (
  <Box
    sx={{ width: 250 }}
    role="presentation"
    onClick={() => setDrawerStatus(false)}
    onKeyDown={() => setDrawerStatus(false)}
    style={{ marginTop: "50px" }}
  >
    {headerNavigationArray.map((nav, index) => (
      <List key={index}>
        <ListItem disablePadding>
          <LinkContainer to={nav.linkTo}>
            <ListItemButton>
              <span style={{ marginRight: "15px" }}>{nav.icon}</span>
              <ListItemText primary={nav.name} />
            </ListItemButton>
          </LinkContainer>
        </ListItem>
      </List>
    ))}
  </Box>
);

export default DrawerList;
