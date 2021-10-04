import { combineReducers } from "redux";
import QrcodeReducer from './qrcode';
const reducers = combineReducers({
    qrcode:QrcodeReducer
});
export default reducers