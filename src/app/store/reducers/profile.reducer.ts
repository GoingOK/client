/**
 * Created by andrew on 29/3/17.
 */


import {Action} from "@ngrx/store";
import {ProfileActions} from "../actions";
import {Profile,ReflectionEntry} from "../../data/models";

export type ProfileState = Profile;

const initialState: ProfileState = new Profile();

export function reducer(state = initialState, action: Action): ProfileState {
    //console.debug("IN PROFILE REDUCER with action: ",action)
    switch (action.type) {
        case ProfileActions.SAVE_REFLECTION: {
            let ref:ReflectionEntry = action.payload;
            state.addReflectionEntry(ref);
            return state;
        }
        case ProfileActions.SAVE_REFLECTION_RESULT: {
            //console.log("Result of Reflection Save: "+JSON.stringify(action.payload));
            return state;
        }
        case ProfileActions.GET_PROFILE: {
            return state; //This is handled by an effect
        }
        case ProfileActions.GET_PROFILE_SUCCESS: {
            //console.log("SUCCESS: Result of get PRofile: "+JSON.stringify(action.payload));
            let profile = new Profile();
            profile = action.payload;
            //console.log("ID: "+JSON.stringify(profile.id));
            state.id = profile.id;
            //console.log("Messages: "+JSON.stringify(profile.messages));
            state.messages = profile.messages;
            //console.log("Reflections: "+JSON.stringify(profile.reflectionEntries));
            state.reflectionEntries = profile.reflectionEntries;
            //console.log("ResearchInfo: "+JSON.stringify(profile.research));
            state.research = profile.research;
            return state;
        }
        case ProfileActions.RESET_PROFILE: {
            return initialState;
        }
        case ProfileActions.LOAD_DUMMY: {
            state = new Profile();
            state.dummyData();
            return state;
        }
        default: {
            return state;
        }
    }
}