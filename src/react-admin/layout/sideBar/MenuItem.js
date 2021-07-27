import React from "react";
import { DashboardMenuItem, MenuItemLink, MenuProps } from "react-admin";
import { useSelector } from "react-redux";
import "./Menu.styles.css";

const MenuItem = ({ group, resource }) => {
  const sidebarIsOpen = useSelector((state) => state.admin.ui.sidebarOpen);
  return (
    <div className="menuItem">
      {sidebarIsOpen ? <p className="menuItem__head">{group}</p> : null}

      {resource.map((value, i) => (
        <div className="menuItem__option">
          <MenuItemLink
            to={`${value.route}`}
            primaryText={value.name}
            leftIcon={<value.icon />}
            style={{ color: "#19191D", fontSize: 14 }}
          />
        </div>
      ))}
    </div>
  );
};

export default MenuItem;
