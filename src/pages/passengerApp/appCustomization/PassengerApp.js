import React from "react";
import "./styles/PassengerApp.css";
import TabSection from "../../../components/customTabs/CustomTabs";
import CustomizeAppSec from "./CustomizeAppSec";
import ReviewSec from "./ReviewSec";
import PublishSec from "./PublishSec";
import { PageTipIcon, PageTipLeftIcon } from "../../../assets/icons/icon";

const PassengerApp = () => {
  return (
    <div className="passengerApp">
      <div className="passengerApp__left">
        <h2>App Customization</h2>

        <div className="passengerApp__tabs">
          <TabSection
            CustomizeAppSec={CustomizeAppSec}
            ReviewSec={ReviewSec}
            PublishSec={PublishSec}
          />
        </div>
      </div>
      <div className="passengerApp__right">
        <div className="passengerApp__pageTips">
          <PageTipIcon />
          <p>Page Tips</p>
          <PageTipLeftIcon />
        </div>
      </div>
    </div>
  );
};

export default PassengerApp;
