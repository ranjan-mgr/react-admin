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
import { customizeApp } from "../../../constants/displayConstants";

const designSettings = [
  {
    value: customizeApp.CHOOSE_BASE_THEME,
    show: true,
  },
  {
    value: customizeApp.APP_LOGIN,
    show: false,
  },
  {
    value: customizeApp.APP_THEME,
    show: false,
  },
  {
    value: customizeApp.CONFIGURE_URL,
    show: false,
  },
  {
    value: customizeApp.POLICIES_COMPLIANCES,
    show: false,
  },
];

const CustomizeAppSec = () => {
  const [select, setSelect] = useState(designSettings);
  // const [showScreen, setShowScreen] = useState(customizeApp.CHOOSE_BASE_THEME);
  const showScreen = useSelector((state) => state.data.showScreen);
  const pageTip = useSelector((state) => state.data.showPageTip);
  const dispatch = useDispatch();

  const onClickOptions = (value) => {
    select[0].show = value === customizeApp.CHOOSE_BASE_THEME ? true : false;
    select[1].show = value === customizeApp.APP_LOGIN ? true : false;
    select[2].show = value === customizeApp.APP_THEME ? true : false;
    select[3].show = value === customizeApp.CONFIGURE_URL ? true : false;
    select[4].show = value === customizeApp.POLICIES_COMPLIANCES ? true : false;

    setSelect([...select]);
    // setShowScreen(value);
    dispatch({ type: SHOW_SCREEN, payload: value });
  };

  const onClickBack = () => {
    if (showScreen === customizeApp.POLICIES_COMPLIANCES) {
      onClickOptions(customizeApp.CONFIGURE_URL);
    } else if (showScreen === customizeApp.CONFIGURE_URL) {
      onClickOptions(customizeApp.APP_THEME);
    } else if (showScreen === customizeApp.APP_THEME) {
      onClickOptions(customizeApp.APP_LOGIN);
    } else if (showScreen === customizeApp.APP_LOGIN) {
      onClickOptions(customizeApp.CHOOSE_BASE_THEME);
    }
  };

  const onClickContinue = () => {
    if (showScreen === customizeApp.CHOOSE_BASE_THEME) {
      onClickOptions(customizeApp.APP_LOGIN);
    } else if (showScreen === customizeApp.APP_LOGIN) {
      onClickOptions(customizeApp.APP_THEME);
    } else if (showScreen === customizeApp.APP_THEME) {
      onClickOptions(customizeApp.CONFIGURE_URL);
    } else if (showScreen === customizeApp.CONFIGURE_URL) {
      onClickOptions(customizeApp.POLICIES_COMPLIANCES);
    }
  };

  const renderScreen = (value) => {
    switch (value) {
      case customizeApp.CHOOSE_BASE_THEME:
        return <ChooseBaseTheme />;
      case customizeApp.APP_LOGIN:
        return <AppLogin />;
      case customizeApp.APP_THEME:
        return <AppTheme />;
      case customizeApp.CONFIGURE_URL:
        return <ConfigureURLs />;
      case customizeApp.POLICIES_COMPLIANCES:
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
          marginRight: pageTip ? 25 : 0,
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
              showScreen === customizeApp.CHOOSE_BASE_THEME && "hideBackBtn"
            }`}
          >
            {showScreen !== customizeApp.CHOOSE_BASE_THEME ? (
              <Button
                style={{
                  textTransform: "none",
                  color: "#2979FF",
                  border: "1px solid #2979FF",
                }}
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
      {!pageTip && showScreen !== customizeApp.CHOOSE_BASE_THEME ? (
        <div className="customizeApp__preview">
          <Preview showScreen={showScreen} />
        </div>
      ) : null}
    </div>
  );
};

export default CustomizeAppSec;
