import React from "react";
import Select from "react-select";

const Dropdown = ({
  selectedOption,
  handleChange,
  options,
  className,
  name,
}) => {
  return (
    <div>
      <Select
        value={selectedOption}
        onChange={handleChange}
        options={options}
        autoFocus={false}
        className={className}
        isDisabled={false}
        isMulti={false}
        isSearchable={false}
        name={name}
        placeholder=""
      />
    </div>
  );
};

export default Dropdown;
