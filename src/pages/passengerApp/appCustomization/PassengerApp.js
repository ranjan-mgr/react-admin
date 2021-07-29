import React, { useState } from "react";
import "./styles/PassengerApp.css";
import TabSection from "../../../components/customTabs/CustomTabs";
import CustomizeAppSec from "./CustomizeAppSec";
import ReviewSec from "./ReviewSec";
import PublishSec from "./PublishSec";
import {
  PageTipIcon,
  PageTipLeftIcon,
  PageTipShowIcon,
} from "../../../assets/icons/icon";
import Accordion from "../../../components/customAccordion/PageTipsAccordion";
import { useToasts } from "react-toast-notifications";
import { useSelector, useDispatch } from "react-redux";
import { TOGGLE_PAGETIP } from "../../../constants/actionTypes";

const mobileAppData = [
  "Select app base version",
  "Add app icon, assets for login",
  "Select app theme",
  "Add app contact details",
  "Add booking and cancelation policies",
  "Review app features",
  "Review payment features",
  "Review app language and currency",
];

const PassengerApp = () => {
  const pageTip = useSelector((state) => state.data.showPageTip);
  const dispatch = useDispatch();
  const { addToast } = useToasts();

  const onClickPageTip = () => {
    dispatch({ type: TOGGLE_PAGETIP, payload: !pageTip });
    // addToast("Failed to load", { appearance: "success" });
  };

  return (
    <div className="passengerApp">
      <div className={`passengerApp__left ${pageTip && "flex-reduce"}`}>
        <h2>App Customization</h2>

        <div className={`passengerApp__tabs ${pageTip && "reduce"}`}>
          <TabSection
            CustomizeAppSec={CustomizeAppSec}
            ReviewSec={ReviewSec}
            PublishSec={PublishSec}
          />
        </div>
      </div>
      <div className={`passengerApp__right ${pageTip && "expand"}`}>
        <div
          className="passengerApp__pageTips"
          onClick={() => onClickPageTip()}
        >
          <div className="passengerApp__pageTipsSec">
            <PageTipIcon />
            <p>Page Tips</p>
          </div>

          {pageTip ? <PageTipShowIcon /> : <PageTipLeftIcon />}
        </div>
        {pageTip ? (
          <div className="passengerApp__accordion">
            <Accordion
              title={"Customize mobile app"}
              data={mobileAppData}
              expanded={true}
            />
            <Accordion title={"Review & Confirm"} data={[]} expanded={false} />
            <Accordion
              title={"Download to Publish"}
              data={[]}
              expanded={false}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default PassengerApp;
