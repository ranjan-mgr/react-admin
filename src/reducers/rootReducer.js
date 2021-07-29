import { TOGGLE_PAGETIP } from "../constants/actionTypes";

const initState = {
  showPageTip: false,
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case TOGGLE_PAGETIP:
      return { showPageTip: action.payload };
    default:
      return state;
  }
};

export default rootReducer;
