import { combineReducers } from "redux";
import RootReducers from "./rootReducer";
import { createHashHistory } from "history";
import { connectRouter } from "connected-react-router";
import { adminReducer } from "react-admin";

const history = createHashHistory();

export default combineReducers({
  admin: adminReducer,
  router: connectRouter(history),
  data: RootReducers,
});
