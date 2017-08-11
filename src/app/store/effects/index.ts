/**
 * Created by andrew on 29/3/17.
 */

import {UserEffects} from './user.effects';
import {ProfileEffects} from './profile.effects';
import {EffectsModule} from "@ngrx/effects";

//Imported by app.module
export const STORE_EFFECTS = EffectsModule.forRoot([UserEffects, ProfileEffects]);