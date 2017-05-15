/**
 * Created by andrew on 4/3/17.
 */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Reflections = (function () {
    function Reflections() {
        this.currentEntry = new ReflectionEntry();
        this.reflectionEntries = [];
    }
    return Reflections;
}());
exports.Reflections = Reflections;
var ReflectionEntry = (function () {
    function ReflectionEntry() {
        this.timestamp = new Date().toISOString();
        this.reflection = new Reflection();
    }
    return ReflectionEntry;
}());
exports.ReflectionEntry = ReflectionEntry;
var Reflection = (function () {
    function Reflection() {
        this.point = -1;
        this.text = "";
    }
    return Reflection;
}());
exports.Reflection = Reflection;
