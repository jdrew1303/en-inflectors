"use strict";
var list_uncountable_1 = require("./list_uncountable");
function isCountable(input) {
    return !~list_uncountable_1["default"].indexOf(input);
}
exports.isCountable = isCountable;
function isNotCountable(input) {
    return !isCountable(input);
}
exports.isNotCountable = isNotCountable;