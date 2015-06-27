(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _createClass = (function () {
    function defineProperties(target, props) {
        for (var key in props) {
            var prop = props[key];prop.configurable = true;if (prop.value) prop.writable = true;
        }Object.defineProperties(target, props);
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
})();

var _classCallCheck = function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
};

/**
 * export function with named axport
 * @param user
 * @returns {*}
 */
exports.setChatUser = setChatUser;
Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * export arrow function with named export
 */
var returnChatMessage = function returnChatMessage() {
    return "Hi!";
};exports.returnChatMessage = returnChatMessage;

function setChatUser() {
    var user = arguments[0] === undefined ? "unnamed user" : arguments[0];

    return user;
}

;

/**
 * export class with ES 6 default export
 */

var ChatUser = (function () {
    function ChatUser(name) {
        _classCallCheck(this, ChatUser);

        this.type = "user";
        this.name = name;
    }

    _createClass(ChatUser, {
        getName: {
            value: function getName() {

                return this.name;
            }
        }
    });

    return ChatUser;
})();

exports["default"] = ChatUser;

},{}],2:[function(require,module,exports){
"use strict";

var _interopRequire = function _interopRequire(obj) {
  return obj && obj.__esModule ? obj["default"] : obj;
};

var _interopRequireWildcard = function _interopRequireWildcard(obj) {
  return obj && obj.__esModule ? obj : { "default": obj };
};

/**
 * import function setChatUser and returnChatMessage
 * with from named export
 */

var _modulesExports = require("./modules-exports");

var setChatUser = _modulesExports.setChatUser;
var returnChatMessage = _modulesExports.returnChatMessage;

/**
 * import all from named export.
 * Store included functions in object
 */

var userFunctions = _interopRequireWildcard(_modulesExports);

/**
 * import class from default export
 */

var ChatUser = _interopRequire(_modulesExports);

/**
 * call the functions from the named export
 */
userFunctions.setChatUser();
userFunctions.returnChatMessage();

/**
 * create instance of class from default export
 * @type {ChatUser}
 */
var user = new ChatUser("Ann");

},{"./modules-exports":1}]},{},[1,2]);
