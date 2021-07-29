import React, { useState } from "react";
import "./index.style.css";
import { AddIcon, RemoveIcon } from "../../assets/icons/icon";

const CustomPicker = ({
  value,
  image,
  width,
  height,
  borderRadius,
  imageHandler,
  removeImage,
  background,
  top,
  left,
}) => {
  // const [image, setImage] = useState("");

  return (
    <div
      className="picker"
      style={{
        width: width ? width : null,
        height: height ? height : null,
        borderRadius: borderRadius ? borderRadius : null,
        background: background ? background : null,
      }}
    >
      <input
        className="picker__inputFile"
        type="file"
        name="image-upload"
        id={value}
        accept="image/*"
        onChange={(e) => imageHandler(e, value)}
        onClick={(event) => {
          event.target.value = null;
        }}
      />
      {image === "" ? (
        <label
          htmlFor={value}
          className={`picker__add ${value !== "Brand" && "center"}`}
        >
          <AddIcon />
          {value === "Brand" ? <p>Add brand logo</p> : null}
        </label>
      ) : (
        <div className="picker__showImage">
          <img
            style={{
              width: width ? width : null,
              height: height ? height : null,
              borderRadius: borderRadius ? borderRadius : null,
            }}
            className="picker__image"
            src={image}
            alt="none"
          />
          <div
            className={`picker__remove ${
              value !== "Brand" && "centerCloseIcon"
            }`}
            onClick={() => removeImage(value)}
            style={{
              top: top ? top : null,
              left: left ? left : null,
            }}
          >
            <RemoveIcon />
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomPicker;
