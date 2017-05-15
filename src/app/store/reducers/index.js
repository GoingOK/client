/**
 * Created by andrew on 29/3/17.
 */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var reflections_reducer_1 = require("./reflections.reducer");
var user_reducer_1 = require("./user.reducer");
var store_1 = require("@ngrx/store");
var core_1 = require("@ngrx/core");
;
exports.default = core_1.compose(store_1.combineReducers)({
    reflections: reflections_reducer_1.default,
    user: user_reducer_1.default
});
