/**
 * Created by andrew on 29/3/17.
 */

import {Injectable} from '@angular/core';
import {Action} from '@ngrx/store';

import {User} from '../../data/models';

@Injectable()
export class UserActions {
    static CHECK_CONNECT = '[User] Check Connect';
    static CHECK_CONNECT_RESULT = '[User] Check Connect Result';
    static AUTH_USER = '[User] Auth User';
    static GET_USER = '[User] Get User';
    static GET_USER_SUCCESS = '[User] Get User Success';
    static RESET_USER = '[User] Reset User';

    // static SIGNED_IN = '[User] Signed In';
    // static SIGNED_OUT = '[User] Signed Out';
    //
    // signedIn(token): Action {
    //     return {
    //         type: UserActions.SIGNED_IN,
    //         payload: token
    //     };
    // }
    // signedOut():Action {
    //     return {
    //         type: UserActions.SIGNED_OUT
    //     }
    // }

    // checkConnect(): Action {
    //     return {
    //         type: UserActions.CHECK_CONNECT
    //     };
    // }
    //
    // checkConnectResult(result):Action {
    //     return {
    //         type: UserActions.CHECK_CONNECT_RESULT,
    //         payload: result
    //     }
    // }

    authUser(token): Action {
        return {
            type: UserActions.AUTH_USER,
            payload: token
        };
    }

    getUser(id): Action {
        return {
            type: UserActions.GET_USER,
            payload: id
        };
    }


    getUserSuccess(user): Action {
        return {
            type: UserActions.GET_USER_SUCCESS,
            payload: user
        };
    }

    resetUser(): Action {
        return {
            type: UserActions.RESET_USER
        };
    }


}