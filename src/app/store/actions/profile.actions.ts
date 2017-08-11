
/**
 * Created by andrew on 3/4/17.
 */

import {Action} from "@ngrx/store";
import {Profile,ReflectionEntry,ResearchChoice} from "../../data/models/";


export const GET_PROFILE = '[Profile] Get Profile';
export const GET_PROFILE_SUCCESS = '[Profile] Get Profile Success';
export const SAVE_REFLECTION = '[Profile] Save Reflection';
export const SAVE_REFLECTION_RESULT = '[Profile] Save Reflection Result';
export const SAVE_RESEARCH = '[Profile] Save Research';
export const SAVE_RESEARCH_RESULT = '[Profile] Save Research Result';
export const RESET_PROFILE = '[Profile] Reset Profile';
export const LOAD_DUMMY_PROFILE = '[Profile] Load Dummy';

export class GetProfile implements Action {
    readonly type = GET_PROFILE;
}

export class GetProfileSuccess implements Action {
    readonly type = GET_PROFILE_SUCCESS;
    constructor(public payload: Profile) {}
}

export class SaveReflection implements Action {
    readonly type = SAVE_REFLECTION;
    constructor(public payload: ReflectionEntry) {}
}

export class SaveReflectionResult implements Action {
    readonly type = SAVE_REFLECTION_RESULT;
    constructor(public payload: string) {}
}

export class SaveResearch implements Action {
    readonly type = SAVE_RESEARCH;
    constructor(public payload: ResearchChoice) {}
}

export class SaveResearchResult implements Action {
    readonly type = SAVE_RESEARCH_RESULT;
    constructor(public payload: string) {}
}

export class ResetProfile implements Action {
    readonly type = RESET_PROFILE;
}

export class LoadDummyProfile implements Action {
    readonly type = LOAD_DUMMY_PROFILE;
}

export type ProfileAction =
    | GetProfile
    | GetProfileSuccess
    | SaveReflection
    | SaveReflectionResult
    | SaveResearch
    | SaveResearchResult
    | ResetProfile
    | LoadDummyProfile;
