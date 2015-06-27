/**
 * Symbols in ES 6
 */

let userId = Symbol();

let userId2 = Symbol("description");

var isEqual = userId === userId2; // false

var userId3 = Symbol.for("key");

var userId4 = Symbol.keyFor(userId3);