/**
 * Created by andrew on 29/3/17.
 */

import {Injectable} from '@angular/core';
import {Effect, Actions} from '@ngrx/effects';
import 'rxjs/add/operator/switchMap';
import {ProfileActions} from '../actions';
import {ProfileService} from '../../services';

@Injectable()
export class ProfileEffects {
    constructor (
        private update$: Actions,
        private profileActions: ProfileActions,
        private profileService: ProfileService
    ) {}

    @Effect() saveReflection$ = this.update$
        .ofType(ProfileActions.SAVE_REFLECTION)
        .map(action => action.payload)
        .switchMap(entry => this.profileService.saveReflection(entry,"dummy_token"))
        .map(result => this.profileActions.saveReflectionResult(result));

    @Effect() saveResearch$ = this.update$
        .ofType(ProfileActions.SAVE_RESEARCH)
        .map(action => action.payload)
        .switchMap(entry => this.profileService.saveResearch(entry,"dummy_token"))
        .map(result => this.profileActions.saveResearchResult(result));

    @Effect() getProfile$ = this.update$
        .ofType(ProfileActions.GET_PROFILE)
        .switchMap(() => this.profileService.getProfile())
        .map(result => this.profileActions.getProfileSuccess(result));

}