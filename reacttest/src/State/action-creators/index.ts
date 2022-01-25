import { ActionType } from "../action-types";
import { Dispatch } from "redux";
const SIGNUP = (x: object) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: ActionType.SIGNUP,
      payload: x,
    });
  };
};
