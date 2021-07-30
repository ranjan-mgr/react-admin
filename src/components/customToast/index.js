import React from "react";

const CustomToast = ({ appearance, children, showButton }) => {
  const styles = {
    button: {
      background: "#3A3A44",
      outline: "none",
      color: "#fff",
      border: "1px solid #fff",
      padding: 5,
      borderRadius: 5,
      marginLeft: 10,
    },
  };
  console.log("Hide button", showButton);
  return (
    <div
      style={{
        background: appearance === "error" ? "red" : "#3A3A44",
        padding: 10,
        borderRadius: 10,
        color: "#fff",
      }}
    >
      {children}

      {showButton ? <button style={styles.button}>Retry</button> : null}
    </div>
  );
};

export default CustomToast;
