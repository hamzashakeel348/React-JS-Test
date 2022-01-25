import { ActionType } from "../action-types/index";
interface SignUp {
  type: ActionType.SIGNUP;
  payload: object;
}
export type Action = SignUp;
