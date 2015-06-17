/**
 * inheritance in ES 5
 */

function Animal(name) {

    this.type = "animal";
    this.name = name;

}

Animal.prototype.getName = function() {

    return this.name;

};

Dog.prototype = new Animal();

Dog.prototype.constructor = Dog;

function Dog(name, sound) {

    this.name = name;
    this.sound = sound;

}

Dog.prototype.getDogName = function() {

    return this.getName() + " is an " + this.type;

};

Dog.prototype.makeSound = function() {

    return "I can make " + this.sound;

};

var dog = new Dog('Barker', "woof");
