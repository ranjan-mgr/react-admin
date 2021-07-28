import React, { useState } from "react";
import { UpArrowIcon, DownArrowIcon } from "../../assets/icons/icon";
import { DotIcon } from "../../assets/icons/icon";

const PageTipsAccordion = ({ title, data = [], expanded }) => {
  const [toggle, setToggle] = useState(expanded);

  const styles = {
    main: {
      padding: 10,
    },
    head: {
      display: "flex",
      alignItems: "center",
      cursor: "pointer",
      padding: 5,
    },
    textContainer: {
      display: "flex",
      alignItems: "center",
      paddingBottom: 10,
    },
    headText: {
      marginLeft: 10,
      color: "#19191D",
      fontSize: 14,
      // fontWeight: "bold",
    },
    section: {
      padding: 10,
    },
    text: {
      fontSize: 12,
      color: "#19191D",
      marginLeft: 10,
    },
  };

  return (
    <div style={styles.main}>
      <div style={styles.head} onClick={() => setToggle(!toggle)}>
        {toggle ? <UpArrowIcon /> : <DownArrowIcon />}
        <p style={styles.headText}>{title}</p>
      </div>
      {toggle ? (
        <div style={styles.section}>
          {data.map((item, i) => (
            <div style={styles.textContainer}>
              <DotIcon />
              <p style={styles.text} key={i}>
                {item}
              </p>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default PageTipsAccordion;
