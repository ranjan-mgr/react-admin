import React from "react";
import "./index.style.css";

const TextInput = () => {
  return (
    <div className="textInput">
      <input
        className="textInput__input"
        type="text"
        placeholder="type app name"
      />
    </div>
  );
};

export default TextInput;
