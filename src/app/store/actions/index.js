/**
 * Created by andrew on 29/3/17.
 */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_actions_1 = require("./user.actions");
exports.UserActions = user_actions_1.UserActions;
var reflections_actions_1 = require("./reflections.actions");
exports.ReflectionsActions = reflections_actions_1.ReflectionsActions;
exports.default = [
    user_actions_1.UserActions,
    reflections_actions_1.ReflectionsActions
];
