import React, { useState } from "react";
import "./styles/CustomizeApp.css";
import Accordion from "../../../components/customAccordion/Accordion";
import ChooseBaseTheme from "./designSettings/ChooseBaseTheme";
import AppLogin from "./designSettings/AppLogin";
import AppTheme from "./designSettings/AppTheme";
import ConfigureURLs from "./designSettings/ConfigureURLs";
import Policies from "./designSettings/Policies";
import { useSelector, useDispatch } from "react-redux";
import { SHOW_SCREEN } from "../../../constants/actionTypes";
import Button from "@material-ui/core/Button";
import Preview from "../../../components/preview";

const designSettings = [
  {
    value: "Choose Base Theme",
    show: true,
  },
  {
    value: "Login",
    show: false,
  },
  {
    value: "App Theme",
    show: false,
  },
  {
    value: "Configure URLs",
    show: false,
  },
  {
    value: "Policies & Compliances",
    show: false,
  },
];

const CustomizeAppSec = () => {
  const [select, setSelect] = useState(designSettings);
  // const [showScreen, setShowScreen] = useState("Choose Base Theme");
  const showScreen = useSelector((state) => state.data.showScreen);
  const pageTip = useSelector((state) => state.data.showPageTip);
  const dispatch = useDispatch();

  const onClickOptions = (value) => {
    select[0].show = value === "Choose Base Theme" ? true : false;
    select[1].show = value === "Login" ? true : false;
    select[2].show = value === "App Theme" ? true : false;
    select[3].show = value === "Configure URLs" ? true : false;
    select[4].show = value === "Policies & Compliances" ? true : false;

    setSelect([...select]);
    // setShowScreen(value);
    dispatch({ type: SHOW_SCREEN, payload: value });
  };

  const onClickBack = () => {
    if (showScreen === "Policies & Compliances") {
      onClickOptions("Configure URLs");
    } else if (showScreen === "Configure URLs") {
      onClickOptions("App Theme");
    } else if (showScreen === "App Theme") {
      onClickOptions("Login");
    } else if (showScreen === "Login") {
      onClickOptions("Choose Base Theme");
    }
  };

  const onClickContinue = () => {
    if (showScreen === "Choose Base Theme") {
      onClickOptions("Login");
    } else if (showScreen === "Login") {
      onClickOptions("App Theme");
    } else if (showScreen === "App Theme") {
      onClickOptions("Configure URLs");
    } else if (showScreen === "Configure URLs") {
      onClickOptions("Policies & Compliances");
    }
  };

  const renderScreen = (value) => {
    switch (value) {
      case "Choose Base Theme":
        return <ChooseBaseTheme />;
      case "Login":
        return <AppLogin />;
      case "App Theme":
        return <AppTheme />;
      case "Configure URLs":
        return <ConfigureURLs />;
      case "Policies & Compliances":
        return <Policies />;
      default:
        return null;
    }
  };

  return (
    <div className="customizeApp">
      <div
        className="customizeApp_main"
        style={{
          flex: pageTip && showScreen === "Choose Base Theme" ? 0.97 : null,
        }}
      >
        <div className="customizeApp__left">
          <Accordion
            title={"Design Settings"}
            onClickOptions={onClickOptions}
            data={select}
            disable={true}
            expanded={true}
          />
          <Accordion
            title={"Feature Settings"}
            onClickOptions={onClickOptions}
            data={[]}
            disable={true}
            expanded={false}
          />
        </div>
        <div className="customizeApp__right">
          {renderScreen(showScreen)}
          <div
            className={`customizeApp__continue ${
              showScreen === "Choose Base Theme" && "hideBackBtn"
            }`}
          >
            {showScreen !== "Choose Base Theme" ? (
              <Button
                style={{ textTransform: "none" }}
                variant="outlined"
                color="primary"
                disableElevation
                onClick={onClickBack}
              >
                Back
              </Button>
            ) : null}

            <Button
              style={{ textTransform: "none", background: "#2979FF" }}
              variant="contained"
              color="primary"
              disableElevation
              onClick={onClickContinue}
            >
              Continue
            </Button>
          </div>
        </div>
      </div>
      {!pageTip && showScreen !== "Choose Base Theme" ? (
        <div className="customizeApp__preview">
          <Preview />
        </div>
      ) : null}
    </div>
  );
};

export default CustomizeAppSec;
