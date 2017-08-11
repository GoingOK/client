/**
 * Created by andrew on 29/3/17.
 */


import {User,UserResponse} from "../../data/models";
import {AUTH_USER, AUTH_USER_SUCCESS, RESET_USER, UserAction} from "../actions/user.actions";

export type UserState = User;

const initialState: UserState = new User();


export function reducer(state = initialState, action: UserAction): UserState {
    switch (action.type) {
        case AUTH_USER: { return state; } //This is handled by user.effects
        case AUTH_USER_SUCCESS: {
            //console.log("GET_USER_SUCCESS payload: "+JSON.stringify(action.payload));
            let response:UserResponse = action.payload;
            //console.log("Message: "+ response.message)
            console.info("GoingOK ID: "+ response.id);
            console.info("Stored session: "+response.session);
            state.id = response.id;
            //console.log("Session: "+ response.session)
            state.session = response.session;
            state.isSignedIn = true;
            state.isAuthorised = true;
            return state;
        }
        case RESET_USER: {
            return initialState;
        }
        default: {
            //console.log("Returning default state for user")
            return state;
        }
    }
}