/**
 * Created by andrew on 29/3/17.
 */


import {combineReducers, StoreModule} from "@ngrx/store";
import {compose} from "@ngrx/core";
import * as googleProfile from './googleProfile.reducer';
import * as user from './user.reducer';
import * as profile from './profile.reducer';
import {ModuleWithProviders} from "@angular/core";


export interface AppState {
    user: user.UserState;
    profile: profile.ProfileState;
    googleProfile: googleProfile.GoogleProfileState;
};

const allReducers: any = {
    user: user.reducer,
    profile: profile.reducer,
    googleProfile: googleProfile.reducer
};

const appInitialState: any = {

};

export const STORE: ModuleWithProviders = StoreModule.provideStore(allReducers, appInitialState);

