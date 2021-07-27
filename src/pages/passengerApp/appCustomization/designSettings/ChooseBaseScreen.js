import React, { useState } from "react";
import "../styles/ChooseBaseTheme.css";
import CheckBox from "../../../../components/customCheckbox";
import Select from "../../../../components/customDropdown";
import { LinkIcon } from "../../../../assets/icons/icon";
import Swiper from "../../../../components/customSwiper";
import Button from "@material-ui/core/Button";

const optionsAndroid = [
  { value: " Android v1.2.0", label: " Android v1.2.0" },
  { value: " Android v1.2.1", label: " Android v1.2.1" },
  { value: " Android v1.2.2", label: " Android v1.2.2" },
];

const optionsIos = [
  { value: " iOS v1.2.0", label: " iOS v1.2.0" },
  { value: " iOS v1.2.1", label: " iOS v1.2.1" },
  { value: " iOS v1.2.2", label: " iOS v1.2.2" },
];

const screenPrev = [
  {
    name: " 1",
  },
  {
    name: " 2",
  },
  {
    name: " 3",
  },
  {
    name: " 4",
  },
  {
    name: " 5",
  },
  {
    name: " 6",
  },
  {
    name: " 7",
  },
];

const ChooseBaseScreen = () => {
  const [selectedOption, setSelectedOptions] = useState("");

  const handleChange = (selectedOption) => {
    setSelectedOptions(selectedOption);
  };

  const renderPage = (value) => {
    return (
      <div style={{ marginBottom: 50 }}>
        <div className="baseTheme__checkbox">
          <CheckBox
            title={`Customize ${
              value === "android" ? "Android" : value === "ios" ? "iOS" : "Web"
            } App`}
          />
        </div>
        <div className="baseTheme__select">
          <div className="baseTheme__dropdown">
            {value !== "web" ? (
              <Select
                value={selectedOption}
                onChange={handleChange}
                options={value === "ios" ? optionsIos : optionsAndroid}
              />
            ) : null}
          </div>

          <div className="baseTheme__links">
            <div className="baseTheme__linkText">
              <p>Product Doc</p>
              <LinkIcon />
            </div>
            <div className="baseTheme__linkText">
              <p>Release Note</p>
              <LinkIcon />
            </div>
          </div>
        </div>

        <div className="baseTheme__swiper">
          <Swiper screenPrev={screenPrev} value={value} />
        </div>
      </div>
    );
  };

  return (
    <div className="baseTheme">
      <h3>Choose Base Theme</h3>
      {renderPage("android")}
      {renderPage("ios")}
      {renderPage("web")}

      <div className="baseTheme__continue">
        <Button
          style={{ textTransform: "none", background: "#2979FF" }}
          variant="contained"
          color="primary"
          disableElevation
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

export default ChooseBaseScreen;
