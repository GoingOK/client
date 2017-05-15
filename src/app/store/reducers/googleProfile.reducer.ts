/**
 * Created by andrew on 29/3/17.
 */


import {GoogleProfile} from "../../data/models/GoogleProfile";
import {Action} from "@ngrx/store";
import {GoogleProfileActions} from "../actions";

export type GoogleProfileState = GoogleProfile;

const initialState: GoogleProfileState = new GoogleProfile();

export function reducer(state = initialState, action: Action): GoogleProfileState {
    switch (action.type) {
        case GoogleProfileActions.RESET_PROFILE: {
            return initialState;
        }
        case GoogleProfileActions.GET_PROFILE: {
            return state;
        }
        case GoogleProfileActions.SAVE_PROFILE: {
            //console.log("GoogleProfile: "+JSON.stringify(action.payload))
            state = action.payload;
            return state;
        }
        default: {
            return state;
        }
    }
}

