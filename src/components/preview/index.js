import React from "react";
import "./index.styles.css";
import { LinkIcon } from "../../assets/icons/icon";
import AppLoginPreview from "./AppLoginPreview";
import { customizeApp } from "../../constants/displayConstants";

// import background from "./3.png";
// import brand from "./1.png";

const background = "";

const index = ({ showScreen }) => {
  return (
    <div className="preview">
      <div className="preview__options">
        <p className="selected">Android</p>
        <p>iOS</p>
        <p>Web</p>
      </div>

      <div
        className="preview__screen"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="preview__link">
          <div className="preview__linkIcon">
            <LinkIcon color="#2979FF" />
          </div>
        </div>
        {showScreen === customizeApp.APP_LOGIN ? <AppLoginPreview /> : null}
      </div>
    </div>
  );
};

export default index;
