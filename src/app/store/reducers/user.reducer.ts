/**
 * Created by andrew on 29/3/17.
 */


import {User,UserResponse} from "../../data/models";
import {UserActions} from "../actions";
import {Action} from "@ngrx/store";

export type UserState = User;

const initialState: UserState = new User();


export function reducer(state = initialState, action: Action): UserState {
    switch (action.type) {
        case UserActions.AUTH_USER: {
            //This is handled by user.effects
            return state;
        }
        case UserActions.RESET_USER: {
            return initialState;
        }
        case UserActions.GET_USER_SUCCESS: {
            //console.log("GET_USER_SUCCESS payload: "+JSON.stringify(action.payload));
            let response:UserResponse = action.payload
            //console.log("Message: "+ response.message)
            console.info("GoingOK ID: "+ response.id)
            state.id = response.id;
            //console.log("Session: "+ response.session)
            state.session = response.session;
            state.isSignedIn = true;
            state.isAuthorised = true;
            return state;
        }
        case UserActions.CHECK_CONNECT_RESULT: {
            //console.log("CHECK_CONNECT_RESULT payload: "+JSON.stringify(action.payload));
            return state;
        }
        default: {
            //console.log("Returning default state for user")
            return state;
        }
    }
}