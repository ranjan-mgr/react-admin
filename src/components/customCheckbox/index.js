import React from "react";
import Checkbox from "@material-ui/core/Checkbox";

const CustomCheckBox = ({ title, checked, handleCheck }) => {
  return (
    <div
      style={{
        border: "1px solid #2264D1",
        display: "flex",
        alignItems: "center",
        borderRadius: "5px",
      }}
    >
      <Checkbox
        checked={checked}
        onChange={handleCheck}
        inputProps={{ "aria-label": "primary checkbox" }}
        style={{ color: "#2264D1" }}
      />
      <p style={{}}>{title}</p>
    </div>
  );
};

export default CustomCheckBox;
