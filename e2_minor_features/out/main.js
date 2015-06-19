(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * function call in ES 5
 */
"use strict";

var duplicate = function duplicate(value) {

  return value * 2;
};

/**
 * arrow operator in ES 6
 */
var duplicate = function duplicate(value) {
  return value * 2;
};

duplicate(2); // 4

},{}],2:[function(require,module,exports){
"use strict";

var iterator = Iterator();
console.log("iteator", iterator);

},{}],3:[function(require,module,exports){
/**
 * spread operator function in ES 6
 * @param val1
 * @param val2
 * @param val3
 * @param val4
 */
"use strict";

function spreadFunction(val1, val2, val3, val4) {

  console.log(val1, val2, val3, val4); // 1 2 3 4
}

var array = [1, 2];
var array2 = [3, 4];

spreadFunction.apply(undefined, array.concat(array2));

},{}]},{},[1,2,3]);
