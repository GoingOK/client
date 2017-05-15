/**
 * Created by andrew on 29/3/17.
 */

import {Injectable} from '@angular/core';
import {Action} from '@ngrx/store';

@Injectable()
export class GoogleProfileActions {
    static GET_PROFILE = '[GoogleProfile] Get Profile';
    static SAVE_PROFILE = '[GoogleProfile] Save Profile';
    static RESET_PROFILE = '[GoogleProfile] Reset Profile';

    getProfile(): Action {
        return {
            type: GoogleProfileActions.GET_PROFILE
        };
    }


    saveProfile(profile): Action {
        return {
            type: GoogleProfileActions.SAVE_PROFILE,
            payload: profile
        };
    }

    resetProfile(): Action {
        return {
            type: GoogleProfileActions.RESET_PROFILE
        };
    }
}
