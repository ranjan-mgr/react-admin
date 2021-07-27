import React, { forwardRef } from "react";
import { AppBar, UserMenu, MenuItemLink } from "react-admin";
import "./AppBar.styles.css";

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
      color="#fff"
      elevation={1}
      // userMenu={<CustomUserMenu />}
    >
      <div className="appBar__left">
        <p>Trip Fleet Admin</p>
      </div>
      <div className="appBar__right">
        <p>Ranjan Moger</p>
      </div>
    </AppBar>
  );
};

export default CustomAppBar;
