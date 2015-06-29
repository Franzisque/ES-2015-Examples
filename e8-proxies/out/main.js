(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var chatUser = {

    userName: "Sally",
    age: 25

};

var chatUserValidator = {

    set: function set(chatUser, property, userName) {

        if (property === "userName") {

            if (typeof userName !== "string") {

                throw "invalid data type for username";
            }

            if (userName.indexOf(" ") >= 0) {

                throw "no white spaces in username allowed";
            }
        }

        chatUser.userName = userName;
    }

};

var chatUserProxy = new Proxy(chatUser, chatUserValidator);

chatUserProxy.userName = "Ann";

console.log(chatUser.userName);

/**
 * zusätzliche validierungen
 * separieren von dingen die nicht direkt etwas mit eig. logik
 * zu tun hat - profiler/observer, logging
 * zusätzliche validierungen für tests - wie oft wird was aufgerufen -> modularität,
 * stress testing - bottlenecks von app aufdecken
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
 * http://de.slideshare.net/BrendanEich/metaprog-5303821
 */

},{}]},{},[1]);
