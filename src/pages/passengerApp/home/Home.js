import React from "react";
import "./Home.css";
import { Link, Title } from "react-admin";
import Button from "@material-ui/core/Button";
import {
  HamerLogo,
  SettingsLogo,
  ConfirmLogo,
  DownloadLogo,
} from "../../../assets/icons/icon";
import { IoIosArrowForward } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";

const Home = () => {
  const data = useSelector((state) => state.data.test);
  // const dispatch = useDispatch();
  // dispatch({ type: "CREATE", payload: "abc" });
  console.log("Data from redux", data);
  return (
    <div className="home">
      <Title title={"Passenger App"} />
      <h2>App Customization</h2>

      <div className="home__welcome">
        <p className="home__head">Welcome to the app customization center!</p>
        <p className="home__text">
          This is where you build your mobile and web app. Simply apply few
          customizations and generate android and ios app files which you can
          easily publish on app stores using our easy to use self-guide.
        </p>
        <div className="home__options">
          <div className="home__sec">
            <div className="home__step1">
              <HamerLogo />
            </div>
            <p>Select app base version</p>
          </div>
          <div className="home__arrow">
            <IoIosArrowForward style={{ fontSize: 32 }} />
          </div>
          <div className="home__sec">
            <div className="home__step2">
              <SettingsLogo />
            </div>
            <p>Apply Customizations</p>
          </div>
          <div className="home__arrow">
            <IoIosArrowForward style={{ fontSize: 32 }} />
          </div>
          <div className="home__sec">
            <div className="home__step3">
              <ConfirmLogo />
            </div>
            <p>Review & confirm</p>
          </div>
          <div className="home__arrow">
            <IoIosArrowForward style={{ fontSize: 32 }} />
          </div>
          <div className="home__sec">
            <div className="home__step4">
              <DownloadLogo />
            </div>
            <p>Download to publish</p>
          </div>
        </div>
      </div>
      <div className="home__getStart">
        <Link to="/app-customization">
          <Button
            style={{ textTransform: "none", background: "#2979FF" }}
            variant="contained"
            color="primary"
            disableElevation
            // onClick={() => history.push("/select-app")}
          >
            Get Started Now
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
