import { combineReducers } from "redux";
import mainReducer from "./main-reducers";
import likeReducer from "./like-reducer";

const rootReducer = combineReducers({
    mainReducer,
    likeReducer
})

export default rootReducer