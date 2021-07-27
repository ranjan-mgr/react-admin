import React from "react";
import "./Menu.styles.css";
import { navOptions } from "./navOptions";
import MenuItem from "./MenuItem";

const Menu = () => {
  return (
    <div className="menu">
      <div className="menu__section">
        {navOptions.map((item, index) => (
          <MenuItem key={index} group={item.group} resource={item.resource} />
        ))}
      </div>
    </div>
  );
};

export default Menu;
