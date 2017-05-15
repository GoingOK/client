/**
 * Created by andrew on 29/3/17.
 */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var models_1 = require("../models");
var actions_1 = require("../actions");
var initialState = new models_1.User();
function default_1(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case actions_1.UserActions.RESET_USER: {
            return initialState;
        }
        case actions_1.UserActions.GET_USER_SUCCESS: {
            return action.payload;
        }
        default: {
            return state;
        }
    }
}
exports.default = default_1;
