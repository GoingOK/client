// /**
//  * Created by andrew on 29/3/17.
//  */
//
// import {Injectable} from '@angular/core';
// import {Action} from '@ngrx/store';
//
// import {ReflectionEntry, Reflections} from '../models/Reflections';
//
// @Injectable()
// export class ReflectionsActions {
//     static ADD_REFLECTION = '[Reflections] Add Reflection';
//     static SAVE_ENTRY_RESULT = '[Reflections] Save Entry Result';
//     static LOAD_DUMMY = '[Reflections] Load Dummy';
//     static GET_REFLECTIONS = '[Reflections] Get Reflections';
//     static GET_REFLECTIONS_SUCCESS = '[Reflections] Get Reflections Success';
//     static RESET_REFLECTIONS = '[Reflections] Reset Reflections';
//
//     addReflection(ref:ReflectionEntry): Action {
//         return {
//             type: ReflectionsActions.ADD_REFLECTION,
//             payload: ref
//         };
//     }
//
//     saveEntryResult(result): Action {
//         return {
//             type: ReflectionsActions.SAVE_ENTRY_RESULT,
//             payload: result
//         };
//     }
//
//
//     getReflections(): Action {
//         return {
//             type: ReflectionsActions.GET_REFLECTIONS
//         };
//     }
//
//
//     getReflectionsSuccess(reflections): Action {
//         return {
//             type: ReflectionsActions.GET_REFLECTIONS_SUCCESS,
//             payload: reflections
//         };
//     }
//
//     resetReflections(): Action {
//         return {
//             type: ReflectionsActions.RESET_REFLECTIONS
//         };
//     }
//
//     loadDummy(): Action {
//         return {
//             type: ReflectionsActions.LOAD_DUMMY
//         };
//     }
// }
