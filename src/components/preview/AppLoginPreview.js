import React from "react";

const brand = "";

const AppLoginPreview = () => {
  return (
    <div>
      <div className="preview__brandSec">
        {brand ? <img className="preview__brand" src={brand} alt="" /> : null}
      </div>

      <div className="preview__Authsec">
        <div className="preview__username">
          <p>Username</p>
        </div>
        <div className="preview__username">
          <p>Password</p>
        </div>
        <div className="preview__continue">
          <p>Continue</p>
        </div>
      </div>
    </div>
  );
};

export default AppLoginPreview;
