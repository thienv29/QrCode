export const initialState = {
    value: "http://picturesofpeoplescanningqrcodes.tumblr.com/",
    size: 100,
    bgColor: "#ffffff",
    fgColor: "#000000",
    level: "L",
    includeMargin: "false",
    renderAs: "canvas",
    imageSettings: {
        src: "http://cvvqt.glitch.me/assets/img/Untitled-2.png",
        x: null,
        y: null,
        height: 40,
        width: 40,
        excavate: true,
    },
};

const QrcodeReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_VALUE":
            return { ...state, value: action.data };
        case "SET_BACKGROUND":
            return { ...state, bgColor: action.data };
        case "SET_FOREGROUND":
            return { ...state, fgColor: action.data };
        case "SET_LEVEL":
            return { ...state, level: action.data };
        case "SET_LOGO":
            return { ...state, imageSettings: action.data };
        case "RESET":
            return initialState;

        default:
            return state;
    }
};
export default QrcodeReducer;
