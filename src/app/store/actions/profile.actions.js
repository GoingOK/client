/**
 * Created by andrew on 3/4/17.
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ProfileActions = ProfileActions_1 = (function () {
    function ProfileActions() {
    }
    ProfileActions.prototype.addProfile = function (profile) {
        return {
            type: ProfileActions_1.ADD_REFLECTION,
            payload: ref
        };
    };
    ProfileActions.prototype.saveEntryResult = function (result) {
        return {
            type: ProfileActions_1.SAVE_ENTRY_RESULT,
            payload: result
        };
    };
    ProfileActions.prototype.getProfile = function () {
        return {
            type: ProfileActions_1.GET_REFLECTIONS
        };
    };
    ProfileActions.prototype.getProfileSuccess = function (reflections) {
        return {
            type: ProfileActions_1.GET_REFLECTIONS_SUCCESS,
            payload: reflections
        };
    };
    ProfileActions.prototype.resetProfile = function () {
        return {
            type: ProfileActions_1.RESET_REFLECTIONS
        };
    };
    ProfileActions.prototype.loadDummy = function () {
        return {
            type: ProfileActions_1.LOAD_DUMMY
        };
    };
    return ProfileActions;
}());
ProfileActions.LOAD_DUMMY = '[Profile] Load Dummy';
ProfileActions.GET_PROFILE = '[Profile] Get Profile';
ProfileActions.GET_PROFILE_SUCCESS = '[Profile] Get Profile Success';
ProfileActions.RESET_PROFILE = '[Profile] Reset Profile';
ProfileActions = ProfileActions_1 = __decorate([
    core_1.Injectable()
], ProfileActions);
exports.ProfileActions = ProfileActions;
var ProfileActions_1;
