import {Action} from "@ngrx/store";
import {Config} from "../../models/config";

export enum ConfigAction {
  GetConfig = '[Config] Get Config',
  GetConfigSuccess = '[Config] Get Config Success'
}

export class GetConfig implements Action {
  public readonly type = ConfigAction.GetConfig
}

export class GetConfigSuccess implements Action {
  public readonly type = ConfigAction.GetConfigSuccess

  constructor(public payload: Config) {
  }
}

export type ConfigActions = GetConfig | GetConfigSuccess
