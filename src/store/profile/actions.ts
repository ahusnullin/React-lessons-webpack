import {iChangeName, iToggleProfile} from "store/profile/types";

export const TOGGLE_PROFILE = 'PROFILE::TOGGLE_PROFILE';
export const CHANGE_NAME = 'PROFILE::CHANGE_NAME';


export const toggleProfile = (): iToggleProfile => ({
    type: TOGGLE_PROFILE,
})

export const changeName = (name: string): iChangeName => ({
    type: CHANGE_NAME,
    payload: name,
})