/**
 * Created by andrew on 29/3/17.
 */

import {Injectable} from '@angular/core';
import {Effect, Actions} from '@ngrx/effects';
import 'rxjs/add/operator/switchMap';
import {AUTH_USER, AuthUser, AuthUserSuccess} from '../actions/user.actions';
import {UserService} from '../../services';

@Injectable()
export class UserEffects {
    constructor (
        private action$: Actions,

        private userService: UserService
    ) {}

    @Effect() authUser$ = this.action$
        .ofType(AUTH_USER)
        .map((action: AuthUser) => action.payload)
        .switchMap((token:string) => this.userService.authUser(token))
        .map(userResponse => new AuthUserSuccess(userResponse));

}