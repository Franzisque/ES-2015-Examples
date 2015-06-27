(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * Symbols in ES 6
 */

"use strict";

var sym1 = Symbol();

var sym2 = Symbol("description");

var isEqual = sym1 === sym2; // false

var sym3 = Symbol["for"]();

var key3 = Symbol.keyFor(sym3);

},{}],2:[function(require,module,exports){
"use strict";

var _defineProperty = function _defineProperty(obj, key, value) {
    return Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
};

var userId = Symbol();

var chatUser = _defineProperty({

    userName: "Sally",
    age: 25 }, userId, "1872340");

var userProperties = [];

for (var userProps in chatUser) {

    userProperties.push(userProps);
}

//console.log(Object.getOwnPropertySymbols(chatUser)[0]);

},{}]},{},[1,2]);
