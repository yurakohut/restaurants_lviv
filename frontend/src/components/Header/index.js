import React from "react";
import { Navbar } from "react-bootstrap";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import DrawerList from "../DrawerList";
import UserAuthMenu from "../UserAuthMenu";
import "./style.scss";

export default function Header() {
  const [drawerStatus, setDrawerStatus] = React.useState(false);

  return (
    <header className="header">
      <Navbar bg="light" className="header-navbar">
        <div className="drawer-navigation">
          <MenuIcon
            onClick={() => setDrawerStatus(true)}
            className="menu-icon"
          />
          <Drawer
            anchor="left"
            open={drawerStatus}
            onClose={() => setDrawerStatus(false)}
          >
            <DrawerList setDrawerStatus={setDrawerStatus} />
          </Drawer>
        </div>
        <div className="other-navigation">
          <UserAuthMenu />
        </div>
      </Navbar>
    </header>
  );
}
