import {initialUserState, UserState} from "../states/user.state";
import {UserAction, UserActions} from "../actions/userAction";

export const userReducers = (
  state = initialUserState, action: UserActions): UserState => {
  switch (action.type) {
    case UserAction.GetUsersSuccess:
      return {
        ...state,
        users: action.payload
      };
    case UserAction.GetUserSuccess:
      return {
        ...state,
        selectedUser: action.payload
      }
    default:
      return state
  }
}
