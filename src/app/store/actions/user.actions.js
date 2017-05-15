/**
 * Created by andrew on 29/3/17.
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
var UserActions = UserActions_1 = (function () {
    function UserActions() {
    }
    UserActions.prototype.getUser = function (id) {
        return {
            type: UserActions_1.GET_USER,
            payload: id
        };
    };
    UserActions.prototype.getUserSuccess = function (user) {
        return {
            type: UserActions_1.GET_USER_SUCCESS,
            payload: user
        };
    };
    UserActions.prototype.resetUser = function () {
        return {
            type: UserActions_1.RESET_USER
        };
    };
    return UserActions;
}());
UserActions.GET_USER = '[User] Get User';
UserActions.GET_USER_SUCCESS = '[User] Get User Success';
UserActions.RESET_USER = '[User] Reset User';
UserActions = UserActions_1 = __decorate([
    core_1.Injectable()
], UserActions);
exports.UserActions = UserActions;
var UserActions_1;
