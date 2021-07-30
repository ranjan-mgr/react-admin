import React from "react";
import "./index.styles.css";
import { LinkIcon } from "../../assets/icons/icon";

const background = require("../../assets/images/1.png");

const index = () => {
  return (
    <div className="preview">
      <div className="preview__options">
        <p className="selected">Android</p>
        <p>iOS</p>
        <p>Web</p>
      </div>

      <div className="preview__screen">
        <div className="preview__link">
          <div className="preview__linkIcon">
            <LinkIcon color="#2979FF" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
