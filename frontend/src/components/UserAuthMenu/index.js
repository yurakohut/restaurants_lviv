import React, { useState } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../actions/userActions";
import "./style.scss";

const UserAuthMenu = () => {
  const dispatch = useDispatch();
  const [anchorElUser, setAnchorElUser] = useState(null);
  const { userInfo } = useSelector(state => state.userLogin);

  const handleOpenUserMenu = event => setAnchorElUser(event.currentTarget);

  const handleCloseUserMenu = () => setAnchorElUser(null);

  const logoutHandler = () => dispatch(logout());

  const avatarImageSrc = userInfo?.userImage || "../images/default-avatar.png";

  return (
    <>
      {userInfo ? (
        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="user-image" src={avatarImageSrc} />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right"
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right"
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            <MenuItem onClick={handleCloseUserMenu}>
              <LinkContainer to="/profile">
                <Typography textAlign="center">Profile</Typography>
              </LinkContainer>
            </MenuItem>
            <MenuItem onClick={handleCloseUserMenu}>
              <Typography textAlign="center" onClick={logoutHandler}>
                Log out
              </Typography>
            </MenuItem>
          </Menu>
        </Box>
      ) : (
        <Button className="login-btn" href="/login">
          Log In
        </Button>
      )}
    </>
  );
};
export default UserAuthMenu;
