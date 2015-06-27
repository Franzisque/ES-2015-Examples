(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * inheritance in ES 5
 */

"use strict";

function Animal(name) {

    this.type = "animal";
    this.name = name;
}

Animal.prototype.getName = function () {

    return this.name;
};

// Here's where the inheritance occurs
Dog.prototype = new Animal();

// Otherwise instances of Cat would have a constructor of Animal
Dog.prototype.constructor = Dog;

function Dog(name, sound) {

    this.name = name;
    this.sound = sound;
}

Dog.prototype.getDogName = function () {

    return this.getName() + " is an " + this.type;
};

Dog.prototype.makeSound = function () {

    return "I can make " + this.sound;
};

var dog = new Dog("Barker", "woof");
console.log(dog);
dog.getDogName();
dog.makeSound();

},{}],2:[function(require,module,exports){
"use strict";

var _get = function get(_x, _x2, _x3) {
    var _again = true;

    _function: while (_again) {
        _again = false;
        var object = _x,
            property = _x2,
            receiver = _x3;
        desc = parent = getter = undefined;
        var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
            var parent = Object.getPrototypeOf(object);if (parent === null) {
                return undefined;
            } else {
                _x = parent;
                _x2 = property;
                _x3 = receiver;
                _again = true;
                continue _function;
            }
        } else if ("value" in desc && desc.writable) {
            return desc.value;
        } else {
            var getter = desc.get;if (getter === undefined) {
                return undefined;
            }return getter.call(receiver);
        }
    }
};

var _inherits = function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) subClass.__proto__ = superClass;
};

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
 * inheritance in ES 6
 */

var Animal = (function () {
    function Animal(name) {
        _classCallCheck(this, Animal);

        this.type = "animal";
        this.name = name;
    }

    _createClass(Animal, {
        getName: {
            value: function getName() {

                return this.name;
            }
        }
    });

    return Animal;
})();

var animal = new Animal("Luna");

var Dog = (function (_Animal) {
    function Dog(name, sound) {
        _classCallCheck(this, Dog);

        _get(Object.getPrototypeOf(Dog.prototype), "constructor", this).call(this, name);
        this.sound = sound;
    }

    _inherits(Dog, _Animal);

    _createClass(Dog, {
        getName: {
            value: function getName() {

                return _get(Object.getPrototypeOf(Dog.prototype), "getName", this).call(this) + " is an " + this.type;
            }
        },
        makeSound: {
            value: function makeSound() {

                return "I can make " + this.sound;
            }
        }
    });

    return Dog;
})(Animal);

//var myDog = new Dog("Barker", "woof");

},{}]},{},[1,2]);
