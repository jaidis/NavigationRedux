import { ADD_TEXT_JSON, DELETE_TEXT_JSON, AUTH_CHECK, AUTH_OK, AUTH_DENEGATE } from "../actions/actionTypes";

const initialState = {
  appJson: "",
  auth: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TEXT_JSON:
      return {
        ...state,
        appJson: () => {
          return (state.appJson = action.textToAdd);
        }
      };
    case DELETE_TEXT_JSON:
      return {
        ...state,
        appJson: () => {
          return (state.appJson = action.textToDelete);
        }
      };
    case AUTH_CHECK:
      return {
        ...state,
        auth: state.auth
      };
    case AUTH_OK:
      return {
        ...state,
        auth: true
      };
    case AUTH_DENEGATE:
      return {
        ...state,
        auth: false
      };
    default:
      return state;
  }
};

export default reducer;
