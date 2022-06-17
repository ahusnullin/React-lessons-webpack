import {Reducer} from "redux";
import {CHANGE_NAME, TOGGLE_PROFILE} from "store/profile/actions";
import {tProfileActions} from "store/profile/types";


export interface iProfileState {
    name: string,
    visible: boolean,
}

const initialState: iProfileState = {
    name: 'user',
    visible: true,
}

export const profileReducer: Reducer<iProfileState, tProfileActions> = (
    state = initialState, action
) => {
    switch (action.type) {
        case TOGGLE_PROFILE: {
            return {
                ...state,
                visible: !state.visible
            }
        }
        case CHANGE_NAME: {
            return {
                ...state,
                name: action.payload
            }
        }
        default: {
            return state;
        }
    }

}