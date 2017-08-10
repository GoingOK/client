/**
 * Created by andrew on 29/3/17.
 */


import {GoogleProfile} from "../../data/models/GoogleProfile";
import {
    GET_GOOGLE_PROFILE, GoogleProfileAction, RESET_GOOGLE_PROFILE,
    SAVE_GOOGLE_PROFILE
} from "../actions/googleProfile.actions";

export type GoogleProfileState = GoogleProfile;

const initialState: GoogleProfileState = new GoogleProfile();

export function reducer(state :GoogleProfileState = initialState, action: GoogleProfileAction): GoogleProfileState {
    switch (action.type) {
        case RESET_GOOGLE_PROFILE: {
            return initialState;
        }
        case GET_GOOGLE_PROFILE: {
            return state;
        }
        case SAVE_GOOGLE_PROFILE: {
            //console.log("GoogleProfile: "+JSON.stringify(action.payload))
            return action.payload;
        }
        default: {
            return state;
        }
    }
}

