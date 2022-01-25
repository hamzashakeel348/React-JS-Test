import { combineReducers } from "redux";
import reducer from "./reducer";

const Reducer = combineReducers({ red: reducer });

export default Reducer;

export type State = ReturnType<typeof Reducer>;
