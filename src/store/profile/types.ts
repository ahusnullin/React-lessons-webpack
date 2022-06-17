import {CHANGE_NAME, TOGGLE_PROFILE} from "store/profile/actions";

export interface iToggleProfile {
    type: typeof TOGGLE_PROFILE,
}

export interface iChangeName {
    type: typeof CHANGE_NAME,
    payload: string,
}

export type tProfileActions = iToggleProfile | iChangeName;

