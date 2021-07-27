import React, { useState } from "react";
import { UpArrowIcon, DownArrowIcon } from "../../assets/icons/icon";

const Accordion = ({ title, onClickOptions, data }) => {
  const [toggle, setToggle] = useState(true);

  return (
    <div className="customizeApp__expand">
      <div className="customizeApp__head" onClick={() => setToggle(!toggle)}>
        {toggle ? <UpArrowIcon /> : <DownArrowIcon />}
        <p>{title}</p>
      </div>
      {toggle ? (
        <div className="customizeApp__expandOptions">
          {data.map((item, i) => (
            <p
              key={i}
              className={item.show ? "customizeApp__select" : ""}
              onClick={() => onClickOptions(item.value)}
            >
              {item.value}
            </p>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default Accordion;
