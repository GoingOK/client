/**
 * Created by andrew on 29/3/17.
 */

import {Action} from '@ngrx/store';
import {GoogleProfile} from "../../data/models/GoogleProfile";


export const GET_GOOGLE_PROFILE = '[GoogleProfile] Get Profile';
export const SAVE_GOOGLE_PROFILE = '[GoogleProfile] Save Profile';
export const RESET_GOOGLE_PROFILE = '[GoogleProfile] Reset Profile';

export class GetGoogleProfile implements Action {
    readonly type = GET_GOOGLE_PROFILE;
}

export class SaveGoogleProfile implements Action {
    readonly type = SAVE_GOOGLE_PROFILE;
    constructor(public payload: GoogleProfile) {}
}

export class ResetGoogleProfile implements Action {
    readonly type = RESET_GOOGLE_PROFILE;
}

export type GoogleProfileAction =
    | GetGoogleProfile
    | SaveGoogleProfile
    | ResetGoogleProfile