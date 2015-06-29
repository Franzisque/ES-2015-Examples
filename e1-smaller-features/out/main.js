(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * function call in ES 5
 */
"use strict";

var receiveChatMessage = function receiveChatMessage(message) {

  return message;
};

/**
 * arrow operator in ES 6
 */
var receiveChatMessage = function receiveChatMessage(message) {
  return message;
};

/**
 * returns without return statement
 */
var returnChatMessage = function returnChatMessage() {
  return "Hello!";
};

/**
 * multiple values - also returned without return statement
 */
var joinChatMessage = function joinChatMessage(message1, message2) {
  return message1 + " " + message2;
};

/**
 * to return an object, braces are required
 */
var returnAChatMessageObject = function returnAChatMessageObject() {
  return { message: "Hello!" };
};

},{}],2:[function(require,module,exports){
/**
 * variable only existent in if-scope
 */
"use strict";

var chatUserExistent = false;

if (!chatUserExistent) {}

/**
 * i is not defined because of block-scope
 * @returns {*}
 */
function loopOverChatUsers() {

  var chatUserArray = ["Ann", "Tom", "Bob"];

  for (var _i = 0; _i < chatUserArray.length; _i++) {}

  return i;
}

//let chatUser = new ChatUser();

// do something with the chatUsers

},{}],3:[function(require,module,exports){
/**
 * function with default parameter in ES 5
 * @param user
 * @returns {}
 */
"use strict";

function setChatUser(user) {

  user = typeof user !== "undefined" ? user : "unnamed user";

  return user;
}

/**
 * default parameter in ES 6
 * @param user
 * @returns {*}
 */
function setChatUser() {
  var user = arguments[0] === undefined ? "unnamed user" : arguments[0];

  return user;
}

},{}],4:[function(require,module,exports){
"use strict";

var chatUserArray = ["Ann", "Tom", "Bob"];
chatUserArray.newUser = "Sally";

for (var chatUser in chatUserArray) {

    console.log(chatUser);
}

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = chatUserArray[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var chatUser = _step.value;

        console.log(chatUser);
    }
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally {
    try {
        if (!_iteratorNormalCompletion && _iterator["return"]) {
            _iterator["return"]();
        }
    } finally {
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}

},{}],5:[function(require,module,exports){
/**
 * push assigned strings into an array with
 * spread-parameters
 */
"use strict";

function storeChatUsers() {

  var firstChatUser = arguments[0];
}

storeChatUsers("Ann", "Sally", "Tim");

/**
 * assign first string to variable user1,
 * push the following into the array remainingUsers
 * @type {string[]}
 */
var user1 = "Ann";
var remainingUsers = ["Tim", "Bob"];

},{}],6:[function(require,module,exports){
"use strict";

var _toArray = function _toArray(arr) {
  return Array.isArray(arr) ? arr : Array.from(arr);
};

var _slicedToArray = function _slicedToArray(arr, i) {
  if (Array.isArray(arr)) {
    return arr;
  } else if (Symbol.iterator in Object(arr)) {
    var _arr = [];for (var _iterator = arr[Symbol.iterator](), _step; !(_step = _iterator.next()).done;) {
      _arr.push(_step.value);if (i && _arr.length === i) break;
    }return _arr;
  } else {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  }
};

var _toConsumableArray = function _toConsumableArray(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];return arr2;
  } else {
    return Array.from(arr);
  }
};

/**
 * spread operator function in ES 6
 * @param user1
 * @param user2
 * @param user3
 */
function displayAllUsers(user1, user2, user3) {

  return "" + user1 + " " + user2 + " " + user3;
}

var chatUserStorage = ["Ann", "Sally", "Tim"];

displayAllUsers.apply(undefined, chatUserStorage);

/**
 * assign the first string to user1 and the second string
 * to user2
 */

var _concat = ["Ann", "Sally"].concat();

var _concat2 = _slicedToArray(_concat, 2);

var user1 = _concat2[0];
var user2 = _concat2[1];

/**
 * assign the first two names to the first two users and
 * the rest to an array called "remainingUsers"
 */

var _concat3 = ["Ann", "Sally", "Tim", "Bob"].concat();

var _concat32 = _toArray(_concat3);

var user3 = _concat32[0];
var user4 = _concat32[1];

var remainingUsers = _concat32.slice(2);

/**
 * copy a complete array into the rest value
 */

var _concat4 = ["Ann", "Sally", "Tim", "Bob"].concat();

var _concat42 = _toArray(_concat4);

var remainingUsers2 = _concat42;

/**
 * seperate the whole string into single characters and
 * assign them to char1 - char3
 */

var _concat5 = [].concat(_toConsumableArray("Bob"));

var _concat52 = _slicedToArray(_concat5, 3);

var char1 = _concat52[0];
var char2 = _concat52[1];
var char3 = _concat52[2];

/**
 * create an associative array looking like:
 * [1: "S", 2: "a", 3: "l", 4: "l", 5: "y"]
 */
var myUser = [,].concat(_toConsumableArray("Sally"));

},{}]},{},[1,2,3,4,5,6]);
