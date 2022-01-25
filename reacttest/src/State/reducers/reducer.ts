import { Action } from "../Actions/index";
import { ActionType } from "../action-types/index";
const user = {
  name: "",
  email: "",
};

const reducer = (state: object = user, action: Action) => {
  switch (action.type) {
    case ActionType.SIGNUP:
      return (state = action.payload);
  }
};

export default reducer;
