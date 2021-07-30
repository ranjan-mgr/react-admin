import React from "react";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const CustomSwitch = ({ label, checked, handleChange, name }) => {
  // const [state, setState] = React.useState({
  //   checkedA: false,
  // });

  // const handleChange = (event) => {
  //   setState({ ...state, [event.target.name]: event.target.checked });
  // };
  return (
    <FormControlLabel
      control={
        <Switch
          checked={checked}
          onChange={handleChange}
          name={name}
          inputProps={{ "aria-label": "secondary checkbox" }}
          // color="secondary"
        />
      }
      label={label}
      style={{
        background: checked ? "#EBF2FF" : null,
        paddingRight: 15,
        borderRadius: 20,
        marginTop: 10,
        color: "#0C2146",
      }}
    />
  );
};

export default CustomSwitch;
