import React, { useState } from "react";
import "./styles/PassengerApp.css";
import TabSection from "../../../components/customTabs/CustomTabs";
import CustomizeAppSec from "./CustomizeAppSec";
import ReviewSec from "./ReviewSec";
import PublishSec from "./PublishSec";
import { PageTipIcon, PageTipLeftIcon } from "../../../assets/icons/icon";

const PassengerApp = () => {
  const [pageTip, setPageTip] = useState(false);

  const onClickPageTip = () => {
    setPageTip(!pageTip);
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
          <PageTipIcon />
          <p>Page Tips</p>
          <PageTipLeftIcon />
        </div>
      </div>
    </div>
  );
};

export default PassengerApp;
