import { TOGGLE_PAGETIP, SHOW_SCREEN } from "../constants/actionTypes";

const initState = {
  showPageTip: false,
  showScreen: "Choose Base Theme",
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case TOGGLE_PAGETIP:
      return { ...state, showPageTip: action.payload };
    case SHOW_SCREEN:
      return { ...state, showScreen: action.payload };
    default:
      return state;
  }
};

export default rootReducer;
