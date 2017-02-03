"use strict";
var porter = require("en-stemmer");
var list = require("./solve_lookup");
function default_1(verb) {
    if (end(verb, "ing")) {
        var a = list.VBP[verb.replace(/ing$/, "")];
        if (a)
            return a[0];
        var b = list.VBP[verb.replace(/ing$/, "e")];
        if (b)
            return b[0];
        var c = list.VBP[verb.replace(/.ing$/, "")];
        if (c)
            return c[0];
        var d = list.VBP[verb.replace(/ying$/, "ie")];
        if (d)
            return d[0];
    }
    else if (end(verb, "s")) {
        var a = list.VBP[verb.replace(/s$/, "")];
        if (a)
            return a[0];
        var b = list.VBP[verb.replace(/es$/, "")];
        if (b)
            return b[0];
        var c = list.VBP[verb.replace(/ies$/, "y")];
        if (c)
            return c[0];
    }
    else if (end(verb, "ed")) {
        var a = list.VBP[verb.replace(/ed$/, "")];
        if (a)
            return a[0];
        var b = list.VBP[verb.replace(/d$/, "")];
        if (b)
            return b[0];
        var c = list.VBP[verb.replace(/ied$/, "y")];
        if (c)
            return c[0];
        var d = list.VBP[verb.replace(/ed$/, "y")];
        if (d)
            return d[0];
        var e = list.VBP[verb.replace(/ed$/, "e")];
        if (e)
            return e[0];
        var f = list.VBP[verb.replace(/.ed$/, "")];
        if (f)
            return f[0];
    }
    return (list.VBP[porter(verb)] || [""])[0];
}
exports.__esModule = true;
exports["default"] = default_1;
function end(str, substring) {
    return str.substr(-substring.length) === substring;
}