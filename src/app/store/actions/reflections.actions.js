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
var ReflectionsActions = ReflectionsActions_1 = (function () {
    function ReflectionsActions() {
    }
    ReflectionsActions.prototype.getReflections = function (id) {
        return {
            type: ReflectionsActions_1.GET_REFLECTIONS,
            payload: id
        };
    };
    ReflectionsActions.prototype.loadReflectionsSuccess = function (reflections) {
        return {
            type: ReflectionsActions_1.GET_REFLECTIONS_SUCCESS,
            payload: reflections
        };
    };
    ReflectionsActions.prototype.resetUser = function () {
        return {
            type: ReflectionsActions_1.RESET_REFLECTIONS
        };
    };
    return ReflectionsActions;
}());
ReflectionsActions.GET_REFLECTIONS = '[Reflections] Get Reflections';
ReflectionsActions.GET_REFLECTIONS_SUCCESS = '[Reflections] Get Reflections Success';
ReflectionsActions.RESET_REFLECTIONS = '[Reflections] Reset Reflections';
ReflectionsActions = ReflectionsActions_1 = __decorate([
    core_1.Injectable()
], ReflectionsActions);
exports.ReflectionsActions = ReflectionsActions;
var ReflectionsActions_1;
// export const SET_POINT = 'SETP';
// export const SET_TEXT = 'SETT';
// export const LOAD_PREV = 'LOADP';
//
// export function reflectionReducer(state: ReflectionStore = new ReflectionStore(), action: Action): ReflectionStore {
//     switch (action.type) {
//         case SET_POINT: {
//             console.log("SET_POINT called in reflectionReducer");
//             state.currentEntry.reflection.point = 100*action.payload;
//             return state;
//         }
//         case SET_TEXT: {
//             console.log("SET_TEXT called in reflectionReducer");
//             state.currentEntry.reflection.text = action.payload;
//             state.reflectionEntries.unshift(state.currentEntry);
//             state.currentEntry = new ReflectionEntry();
//             return state;
//         }
//         case LOAD_PREV: {
//             console.log("LOAD_PREV called in reflectionReducer");
//             state = action.payload;
//             return state;
//         }
//         default:
//             return state;
//     }
// } 
