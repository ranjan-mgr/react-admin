import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Looks3Icon from "@material-ui/icons/Looks3";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={0}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SimpleTabs({ CustomizeAppSec, ReviewSec, PublishSec }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const styles = {
    tabNumber: {
      background: "#EBF2FF",
      padding: 5,
      borderRadius: "50%",
      width: 12,
      height: 12,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginRight: 5,
    },
    tabSection: {
      display: "flex",
      alignItems: "center",
    },
  };

  return (
    <div className={classes.root}>
      <AppBar
        elevation={0}
        position="static"
        style={{ background: "#fff", color: "#000" }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab
            style={{ textTransform: "none", color: "#2264D1" }}
            label={
              <div style={styles.tabSection}>
                <p style={styles.tabNumber}>1</p> Customize App
              </div>
            }
            {...a11yProps(0)}
          />
          <Tab
            disabled
            style={{ textTransform: "none", color: "#2264D1" }}
            label={
              <div style={styles.tabSection}>
                <p style={styles.tabNumber}>2</p> Review & Confirm
              </div>
            }
            {...a11yProps(1)}
          />
          <Tab
            disabled
            style={{ textTransform: "none", color: "#2264D1" }}
            label={
              <div style={styles.tabSection}>
                <p style={styles.tabNumber}>3</p> Publish to Download
              </div>
            }
            {...a11yProps(2)}
          />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <CustomizeAppSec />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ReviewSec />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <PublishSec />
      </TabPanel>
    </div>
  );
}
