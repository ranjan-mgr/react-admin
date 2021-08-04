import React from "react";
import { Admin, Resource, ListGuesser } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import Layout from "./layout/CustomLayout";
import customRoutes from "../utils/routes/CustomRoutes";
import { createHashHistory, createBrowserHistory } from "history";

const history = createBrowserHistory();

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

const ReactAdmin = () => {
  return (
    <Admin
      dataProvider={dataProvider}
      layout={Layout}
      customRoutes={customRoutes}
      history={history}
    >
      <Resource name="passenger-app" />
    </Admin>
  );
};

export default ReactAdmin;
