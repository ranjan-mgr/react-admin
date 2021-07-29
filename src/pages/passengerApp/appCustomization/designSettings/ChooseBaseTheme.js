import React, { useState } from "react";
import "../styles/ChooseBaseTheme.css";
import CheckBox from "../../../../components/customCheckbox";
import Select from "../../../../components/customDropdown";
import { LinkIcon } from "../../../../assets/icons/icon";
import Swiper from "../../../../components/customSwiper";
import Button from "@material-ui/core/Button";

const optionsAndroid = [
  { value: "Android v1.2.0", label: "Android v1.2.0" },
  { value: "Android v1.2.1", label: "Android v1.2.1" },
  { value: "Android v1.2.2", label: "Android v1.2.2" },
];

const optionsIos = [
  { value: "iOS v1.2.0", label: "iOS v1.2.0" },
  { value: "iOS v1.2.1", label: "iOS v1.2.1" },
  { value: "iOS v1.2.2", label: "iOS v1.2.2" },
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

const ChooseBaseTheme = () => {
  const [selectedOptionAndroid, setSelectedOptionsAndroid] = useState("");
  const [selectedOptionIos, setSelectedOptionsIos] = useState("");
  const [selectedOptionWeb, setSelectedOptionsWeb] = useState("");
  const [checkedAndroid, setCheckedAndroid] = useState(false);
  const [checkedIos, setCheckedIos] = useState(false);
  const [checkedWeb, setCheckedWeb] = useState(false);

  const handleChange = (selectedOption) => {
    if (selectedOption.value.charAt(0) === "A") {
      setSelectedOptionsAndroid(selectedOption);
    } else if (selectedOption.value.charAt(0) === "i") {
      setSelectedOptionsIos(selectedOption);
    } else {
      setSelectedOptionsWeb(selectedOption);
    }
  };

  const handleCheck = (event, value) => {
    if (value === "android") {
      setCheckedAndroid(event.target.checked);
    } else if (value === "ios") {
      setCheckedIos(event.target.checked);
    } else {
      setCheckedWeb(event.target.checked);
    }
  };

  const renderPage = (value) => {
    const disable =
      (value === "android" && !checkedAndroid) ||
      (value === "ios" && !checkedIos) ||
      (value === "web" && !checkedWeb);

    return (
      <div style={{ marginBottom: 50 }}>
        <div className="baseTheme__checkbox">
          <CheckBox
            title={`Customize ${
              value === "android" ? "Android" : value === "ios" ? "iOS" : "Web"
            } App`}
            checked={
              value === "android"
                ? checkedAndroid
                : value === "ios"
                ? checkedIos
                : checkedWeb
            }
            handleCheck={(event) => handleCheck(event, value)}
          />
        </div>
        <div className={`baseTheme__select ${disable && "disable"}`}>
          <div className="baseTheme__dropdown">
            {value !== "web" ? (
              <Select
                selectedOption={
                  value === "android"
                    ? selectedOptionAndroid
                    : value === "ios"
                    ? selectedOptionIos
                    : selectedOptionWeb
                }
                handleChange={handleChange}
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

        <div className={`baseTheme__swiper ${disable && "disable"}`}>
          <Swiper
            screenPrev={screenPrev}
            value={value}
            selectedOption={
              value === "android"
                ? selectedOptionAndroid
                : value === "ios"
                ? selectedOptionIos
                : selectedOptionWeb
            }
          />
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

export default ChooseBaseTheme;
