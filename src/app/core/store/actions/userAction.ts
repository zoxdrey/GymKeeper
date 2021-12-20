import {Action} from "@ngrx/store";
import {User} from "../../models/user";

export enum UserAction {
  GetUsers = '[User] Get Users',
  GetUsersSuccess = '[User] Get Users Success',
  GetUser = '[User] Get User',
  GetUserSuccess = '[User] Get USer Success'
}

export class GetUsers implements Action {
  public readonly type = UserAction.GetUsers;
}

export class GetUsersSuccess implements Action {
  public readonly type = UserAction.GetUsersSuccess;

  constructor(public payload: User[]) {
  }
}

export class GetUser implements Action {
  public readonly type = UserAction.GetUser;

  constructor(public payload: number) {
  }
}

export class GetUserSuccess implements Action {
  public readonly type = UserAction.GetUserSuccess;

  constructor(public payload: User) {
  }
}

export type UserActions = GetUser | GetUsers | GetUserSuccess | GetUsersSuccess
