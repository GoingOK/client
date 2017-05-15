/**
 * Created by andrew on 29/3/17.
 */

import {UserActions} from './user.actions';
import {GoogleProfileActions} from './googleProfile.actions';
import {ProfileActions} from "./profile.actions";

//For convenient imports
export {
    UserActions,
    ProfileActions,
    GoogleProfileActions
};

//Used by app.module
export const STORE_ACTIONS = [
    UserActions,
    ProfileActions,
    GoogleProfileActions
];