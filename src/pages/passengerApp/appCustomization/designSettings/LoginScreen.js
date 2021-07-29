import React from "react";

let fi;

const LoginScreen = () => {
  const onSelectImage = (event) => {
    console.log(event.target.files);
  };
  return (
    <div>
      <h2>Login Screen</h2>

      <input
        style={{ display: "none" }}
        type="file"
        name="image-upload"
        id="input"
        accept="image/*"
        onChange={onSelectImage}
        // ref={(fileInput) => (fi = fileInput)}
      />

      <label htmlFor="input" style={{}}>
        Add brand logo
      </label>
    </div>
  );
};

export default LoginScreen;
