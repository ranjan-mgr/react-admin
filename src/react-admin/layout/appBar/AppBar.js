import React, { forwardRef } from "react";
import { AppBar, UserMenu, MenuItemLink } from "react-admin";
import "./AppBar.styles.css";
import { NotificationIcon } from "../../../assets/icons/icon";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";

const ConfigurationMenu = forwardRef((props, ref) => {
  return (
    <MenuItemLink
      ref={ref}
      to="/passenger"
      primaryText={"Passenger App"}
      // leftIcon={<SettingsIcon />}
      onClick={props.onClick}
      sidebarIsOpen
    />
  );
});

const CustomUserMenu = (props) => (
  <UserMenu {...props}>
    <ConfigurationMenu />
  </UserMenu>
);

const CustomAppBar = (props) => {
  return (
    <AppBar
      className="appBar"
      {...props}
      color="inherit"
      elevation={1}
      // userMenu={<div></div>}
    >
      <div className="appBar__left">
        <p>Trip Fleet Admin</p>
      </div>
      <div className="appBar__right">
        <IconButton>
          <Badge badgeContent={0} color="secondary">
            <NotificationIcon />
          </Badge>
        </IconButton>
      </div>
    </AppBar>
  );
};

export default CustomAppBar;
