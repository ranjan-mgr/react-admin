import React, { useState, useEffect } from "react";
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
  const [state, setState] = useState({
    checkedGoogle: false,
    checkedFacebook: false,
    checkediOS: false,
    checkedUserId: false,
  });
  const [enableAll, setEnableAll] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (event) => {
    // console.log("event", event.target.name, state);
    setState({ ...state, [event.target.name]: event.target.checked });

    if (!event.target.checked) {
      setEnableAll(false);
    }
  };

  const handleChangeEnableAll = (event) => {
    setEnableAll(!enableAll);

    if (event.target.checked) {
      const selectAll = {
        checkedGoogle: true,
        checkedFacebook: true,
        checkediOS: true,
        checkedUserId: true,
      };
      setState(selectAll);
    } else {
      const disableAll = {
        checkedGoogle: false,
        checkedFacebook: false,
        checkediOS: false,
        checkedUserId: false,
      };
      setState(disableAll);
    }
  };

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
          <Switch
            label="Enable All"
            handleChange={handleChangeEnableAll}
            checked={enableAll}
            name="enableAll"
          />
        </div>
        <div className="appLogin__enableAll">
          <div className="appLogin__option">
            <Switch
              label="Google"
              handleChange={handleChange}
              checked={state.checkedGoogle}
              name="checkedGoogle"
            />
          </div>
          <div className="appLogin__option">
            <Switch
              label="Facebook"
              handleChange={handleChange}
              checked={state.checkedFacebook}
              name="checkedFacebook"
            />
          </div>
          <div className="appLogin__option">
            <Switch
              label="iOS"
              handleChange={handleChange}
              checked={state.checkediOS}
              name="checkediOS"
            />
          </div>
          <div className="appLogin__option">
            <Switch
              label="User id and password"
              handleChange={handleChange}
              checked={state.checkedUserId}
              name="checkedUserId"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppLogin;
