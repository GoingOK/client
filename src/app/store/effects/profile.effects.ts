/**
 * Created by andrew on 29/3/17.
 */

import {Injectable} from '@angular/core';
import {Effect, Actions} from '@ngrx/effects';
import 'rxjs/add/operator/switchMap';
import {
    GET_PROFILE, GetProfileSuccess, SAVE_REFLECTION, SAVE_RESEARCH, SaveReflection,
    SaveReflectionResult, SaveResearch, SaveResearchResult
} from '../actions/profile.actions';
import {ProfileService} from '../../services';

@Injectable()
export class ProfileEffects {
    constructor (
        private update$: Actions,
        private profileService: ProfileService
    ) {}

    @Effect() saveReflection$ = this.update$
        .ofType(SAVE_REFLECTION)
        .map((action:SaveReflection) => action.payload)
        .switchMap(entry => this.profileService.saveReflection(entry,"dummy_token"))
        .map(result => new SaveReflectionResult(result));

    @Effect() saveResearch$ = this.update$
        .ofType(SAVE_RESEARCH)
        .map((action:SaveResearch) => action.payload)
        .switchMap(entry => this.profileService.saveResearch(entry,"dummy_token"))
        .map(result => new SaveResearchResult(result));

    @Effect() getProfile$ = this.update$
        .ofType(GET_PROFILE)
        .switchMap(() => this.profileService.getProfile())
        .map(result => new GetProfileSuccess(result));

}