import { initialState } from "../reducers/qrcode";


export const setValue = function (value) {
    return {
      type: "SET_VALUE",
      data: value,
    };
  };
  export const setBg = (value) => ({
    type: "SET_BACKGROUND",
    data: value,
  });
  export const setFg = (value) => ({
    type: "SET_FOREGROUND",
    data: value,
  });
  export const setLevel = (value) => {
    return {
      type: "SET_LEVEL",
      data: value
    };
  };
  export const setLogo = (value) => {
    return {
      type: "SET_LOGO",
      data: value
    };
  };
  export const switchLogo = (value) => ({
    type: "SWITCH_LOGO",
    data: value,
  });
  export const reset = () => ({
    type: "RESET",
    data: initialState,
  });