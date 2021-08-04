import { TOGGLE_PAGETIP, SHOW_SCREEN } from "../constants/actionTypes";
import { customizeApp } from "../constants/displayConstants";

const initState = {
  showPageTip: false,
  showScreen: customizeApp.CHOOSE_BASE_THEME,
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
