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
          /**
           *  Add new key value to JSON Object
           */
          let tempJson = JSON.parse(state.appJson);
          if (tempJson !== null){
            tempJson[action.keyToAdd] = action.textToAdd;
          }
          else{
            tempJson = {};
            tempJson[action.keyToAdd] = action.textToAdd;
          }
          return JSON.stringify(tempJson);
        }
      };
    case DELETE_TEXT_JSON:
      return {
        ...state,
        appJson: () => {
          /**
           *  Delete key-value at JSON Object
           */
          let tempJson = JSON.parse(state.appJson);
          if (tempJson !== null){
            delete tempJson[action.keyToDelete];
          }
          return JSON.stringify(tempJson);
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
