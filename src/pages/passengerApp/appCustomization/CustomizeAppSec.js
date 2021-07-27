import React, { useState } from "react";
import "./styles/CustomizeApp.css";
import Accordion from "../../../components/customAccordion/Accordion";
import ChooseBaseTheme from "./designSettings/ChooseBaseScreen";
import LoginScreen from "./designSettings/LoginScreen";
import AppTheme from "./designSettings/AppTheme";
import ConfigureURLs from "./designSettings/ConfigureURLs";
import Policies from "./designSettings/Policies";

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
  const [showScreen, setShowScreen] = useState("Choose Base Theme");

  const onClickOptions = (value) => {
    select[0].show = value === "Choose Base Theme" ? true : false;
    select[1].show = value === "Login" ? true : false;
    select[2].show = value === "App Theme" ? true : false;
    select[3].show = value === "Configure URLs" ? true : false;
    select[4].show = value === "Policies & Compliances" ? true : false;

    setSelect([...select]);
    setShowScreen(value);
  };

  const renderScreen = (value) => {
    switch (value) {
      case "Choose Base Theme":
        return <ChooseBaseTheme />;
      case "Login":
        return <LoginScreen />;
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
      <div className="customizeApp__left">
        <Accordion
          title={"Design Settings"}
          onClickOptions={onClickOptions}
          data={select}
        />
        <Accordion
          title={"Feature Settings"}
          onClickOptions={onClickOptions}
          data={[]}
        />
      </div>
      <div className="customizeApp__right">{renderScreen(showScreen)}</div>
    </div>
  );
};

export default CustomizeAppSec;
