import React, { useState } from "react";
import "../styles/AppLogin.css";
import ImgPicker from "../../../../components/customPicker";
import TextInput from "../../../../components/customTextInput";
import Switch from "../../../../components/customSwitch";
import Button from "@material-ui/core/Button";

const AppLogin = () => {
  const [brandIcon, setBrandIcon] = useState("");
  const [androidIcon, setAndroidIcon] = useState("");
  const [iosIcon, setIosIcon] = useState("");
  const [mobileBackground, setMobileBackground] = useState("");
  const [webBackground, setWebBackground] = useState("");

  const imageHandler = (e, value) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        if (value === "Brand") {
          setBrandIcon(reader.result);
        } else if (value === "Android") {
          setAndroidIcon(reader.result);
        } else if (value === "iOS") {
          setIosIcon(reader.result);
        } else if (value === "Mobile") {
          setMobileBackground(reader.result);
        } else if (value === "Web") {
          setWebBackground(reader.result);
        }
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const removeImage = (value) => {
    if (value === "Brand") {
      setBrandIcon("");
    } else if (value === "Android") {
      setAndroidIcon("");
    } else if (value === "iOS") {
      setIosIcon("");
    } else if (value === "Mobile") {
      setMobileBackground("");
    } else if (value === "Web") {
      setWebBackground("");
    }
  };

  return (
    <div className="appLogin">
      <h3>Customize App Login</h3>

      <div className="appLogin__brand">
        <p className="appLogin__head">Add your brand logo</p>
        <p className="appLogin__text">
          Recommended 1024x1024 px. Image should be in JPEG/PNG/GIF. Maximum
          file size 500KB
        </p>

        <div className="appLogin__picker">
          <ImgPicker
            value={"Brand"}
            image={brandIcon}
            imageHandler={imageHandler}
            removeImage={removeImage}
          />
        </div>
      </div>

      <div className="appLogin__appIcon">
        <p className="appLogin__head">Add app icon</p>
        <p className="appLogin__text">
          Recommended 1024x1024 px. Image should be in JPEG/PNG/GIF. Maximum
          file size 500KB
        </p>

        <div className="appLogin__addApp">
          <div className="appLogin__android">
            <ImgPicker
              value={"Android"}
              image={androidIcon}
              width={70}
              height={70}
              borderRadius={"50%"}
              imageHandler={imageHandler}
              removeImage={removeImage}
            />
            <p>Android</p>
          </div>
          <div className="appLogin__ios">
            <ImgPicker
              value={"iOS"}
              image={iosIcon}
              width={70}
              height={70}
              borderRadius={20}
              imageHandler={imageHandler}
              removeImage={removeImage}
            />
            <p>iOS</p>
          </div>
        </div>
      </div>

      <div className="appLogin__nameApp">
        <p className="appLogin__head">Name your app</p>
        <p className="appLogin__text">
          Users will see and search your app on appstores using this name. Max
          30 characters allowed
        </p>

        <div className="appLogin__textField">
          <TextInput />
        </div>
      </div>

      <div className="appLogin__appIcon">
        <p className="appLogin__head">Add background image for login screen</p>
        <p className="appLogin__text">
          Add an image that compliments your brand identity and app name.
          Recommended 1024x1024 px. Image should be in JPEG/PNG/GIF. Maximum
          file size 500KB
        </p>

        <div className="appLogin__appBackground">
          <div className="appLogin__mobileApp">
            <p>Mobile app</p>
            <ImgPicker
              value={"Mobile"}
              image={mobileBackground}
              imageHandler={imageHandler}
              removeImage={removeImage}
              width={110}
              height={196}
              background={"#D9D9E6"}
              top={83}
              left={43}
            />
          </div>
          <div className="appLogin__webApp">
            <p>Web app</p>
            <ImgPicker
              value={"Web"}
              image={webBackground}
              imageHandler={imageHandler}
              removeImage={removeImage}
              width={344}
              height={258}
              background={"#D9D9E6"}
              top={110}
              left={158}
            />
          </div>
        </div>
      </div>

      <div className="appLogin__loginUsing">
        <div className="appLogin__options">
          <p>Allow users to login using</p>
          <Switch label="Enable All" />
        </div>
        <div className="appLogin__enableAll">
          <div className="appLogin__option">
            <Switch label="Google" />
          </div>
          <div className="appLogin__option">
            <Switch label="Facebook" />
          </div>
          <div className="appLogin__option">
            <Switch label="iOS" />
          </div>
          <div className="appLogin__option">
            <Switch label="User id and password" />
          </div>
        </div>
      </div>

      <div className="appLogin__continue">
        <Button
          style={{ textTransform: "none" }}
          variant="outlined"
          color="primary"
          disableElevation
        >
          Back
        </Button>
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

export default AppLogin;
