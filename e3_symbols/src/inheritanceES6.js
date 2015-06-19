/**
 * inheritance in ES 6
 */

class Animal {

    constructor(name) {

        this.type = "animal";
        this.name = name;

    }

    getName() {

        return this.name;

    }

}

var animal = new Animal("Luna");

class Dog extends Animal {

    constructor(name, sound) {

        super(name);
        this.sound = sound;

    }

    getName() {

        return super.getName() + " is an " + this.type;

    }

    makeSound() {

        return "I can make " + this.sound;
    }

}

var myDog = new Dog("Barker", "woof");


