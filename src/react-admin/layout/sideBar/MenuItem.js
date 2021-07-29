import React from "react";
import { DashboardMenuItem, MenuItemLink, MenuProps } from "react-admin";
import { useSelector } from "react-redux";
import "./Menu.styles.css";
import { RightArrowIcon } from "../../../assets/icons/icon";

const MenuItem = ({ group, resource }) => {
  const sidebarIsOpen = useSelector((state) => state.admin.ui.sidebarOpen);
  const currentPath = useSelector((state) => state.router.location.pathname);
  // console.log(currentPath, resource);
  // const highLight = currentPath === "/app-customization";
  return (
    <div className="menuItem">
      {sidebarIsOpen ? <p className="menuItem__head">{group}</p> : null}

      {resource.map((value, i) => (
        <div className="menuItem__option" key={i}>
          <MenuItemLink
            to={`${value.route}`}
            primaryText={value.name}
            leftIcon={
              <value.icon
                color={currentPath === value.route ? "#2979FF" : "#19191D"}
              />
            }
            // rightIcon={<RightArrowIcon />}
            style={{
              color: currentPath === value.route ? "#2979FF" : "#19191D",
              fontSize: 14,
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default MenuItem;
