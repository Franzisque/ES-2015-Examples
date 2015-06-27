/**
 * inheritance in ES 6
 */

class ChatUser {

    constructor(name) {

        this.type = "user";
        this.name = name;

    }

    getName() {

        return this.name;

    }

}

let chatUser = new ChatUser("Tom");

class Admin extends ChatUser {

    constructor(name, role) {

        super(name);
        this.role = role;

    }

    getName() {

        return super.getName() + " is an " + this.type;

    }

    getRole() {

        return "I am an " + this.role;

    }

}

var admin = new Admin("Sally", "Administrator");


