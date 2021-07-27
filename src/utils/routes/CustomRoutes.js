import * as React from "react";
import { Route } from "react-router-dom";
import PassengerHome from "../../pages/passengerApp/home/Home";
import PassengerApp from "../../pages/passengerApp/appCustomization/PassengerApp";

const route = [
  <Route exact path="/passenger-home" render={() => <PassengerHome />} />,
  <Route exact path="/app-customization" render={() => <PassengerApp />} />,
];

export default route;
