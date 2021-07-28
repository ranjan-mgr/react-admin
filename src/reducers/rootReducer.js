import { CREATE } from "../constants/actionTypes";

const initState = {
  test: ["Test"],
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE":
      return { test: initState.test.push(action.payload) };
    default:
      return state;
  }
};

export default rootReducer;
