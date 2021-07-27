import React from "react";
import Checkbox from "@material-ui/core/Checkbox";

const CustomCheckBox = ({ title }) => {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
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
        onChange={handleChange}
        inputProps={{ "aria-label": "primary checkbox" }}
        style={{ color: "#2264D1" }}
      />
      <p style={{}}>{title}</p>
    </div>
  );
};

export default CustomCheckBox;
