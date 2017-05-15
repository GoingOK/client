
/**
 * Created by andrew on 3/4/17.
 */

import {Injectable} from "@angular/core";
import {Action} from "@ngrx/store";
import {Profile,ReflectionEntry,ResearchChoice} from "../../data/models/";



@Injectable()
export class ProfileActions {

    static GET_PROFILE = '[Profile] Get Profile';
    static GET_PROFILE_SUCCESS = '[Profile] Get Profile Success';
    static SAVE_REFLECTION = '[Profile] Save Reflection';
    static SAVE_REFLECTION_RESULT = '[Profile] Save Reflection Result';
    static SAVE_RESEARCH = '[Profile] Save Research';
    static SAVE_RESEARCH_RESULT = '[Profile] Save Research Result';
    static RESET_PROFILE = '[Profile] Reset Profile';
    static LOAD_DUMMY = '[Profile] Load Dummy';


    getProfile(): Action {
        return {
            type: ProfileActions.GET_PROFILE
        };
    }


    getProfileSuccess(profile:Profile): Action {
        return {
            type: ProfileActions.GET_PROFILE_SUCCESS,
            payload: profile
        };
    }

    saveReflection(ref:ReflectionEntry): Action {
        return {
            type: ProfileActions.SAVE_REFLECTION,
            payload: ref
        };
    }

    saveReflectionResult(result): Action {
        return {
            type: ProfileActions.SAVE_REFLECTION_RESULT,
            payload: result
        };
    }
    saveResearch(research:ResearchChoice): Action {
        return {
            type: ProfileActions.SAVE_RESEARCH,
            payload: research
        };
    }

    saveResearchResult(result): Action {
        return {
            type: ProfileActions.SAVE_RESEARCH_RESULT,
            payload: result
        };
    }

    resetProfile(): Action {
        return {
            type: ProfileActions.RESET_PROFILE
        };
    }

    loadDummy(): Action {
        return {
            type: ProfileActions.LOAD_DUMMY
        };
    }
}
