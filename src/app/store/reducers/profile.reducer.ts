/**
 * Created by andrew on 29/3/17.
 */


import {
    GET_PROFILE, GET_PROFILE_SUCCESS, LOAD_DUMMY_PROFILE, ProfileAction, RESET_PROFILE, SAVE_REFLECTION,
    SAVE_REFLECTION_RESULT
} from "../actions/profile.actions";
import {Profile,ReflectionEntry} from "../../data/models";

export type ProfileState = Profile;

const initialState: ProfileState = new Profile();

export function reducer(state = initialState, action: ProfileAction): ProfileState {
    //console.debug("IN PROFILE REDUCER with action: ",action)
    switch (action.type) {
        case SAVE_REFLECTION: {
            let ref:ReflectionEntry = action.payload;
            state.addReflectionEntry(ref);
            return state;
        }
        case SAVE_REFLECTION_RESULT: {
            //console.log("Result of Reflection Save: "+JSON.stringify(action.payload));
            return state;
        }
        case GET_PROFILE: {
            return state; //This is handled by an effect
        }
        case GET_PROFILE_SUCCESS: {
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
        case RESET_PROFILE: {
            return initialState;
        }
        case LOAD_DUMMY_PROFILE: {
            state = new Profile();
            state.dummyData();
            return state;
        }
        default: {
            return state;
        }
    }
}