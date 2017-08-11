/**
 * Created by andrew on 29/3/17.
 */

import {Action} from '@ngrx/store';
import {UserResponse} from "../../data/models/User";

export const AUTH_USER = '[User] Auth User';
export const AUTH_USER_SUCCESS = '[User] Auth User Success';
export const RESET_USER = '[User] Reset User';

export class AuthUser implements Action {
    readonly type = AUTH_USER;
    constructor(public payload: string) {}
}

export class AuthUserSuccess implements Action {
    readonly type = AUTH_USER_SUCCESS;
    constructor(public payload: UserResponse) {}
}

export class ResetUser implements Action {
    readonly type = RESET_USER
}

export type UserAction =
    | AuthUser
    | AuthUserSuccess
    | ResetUser
