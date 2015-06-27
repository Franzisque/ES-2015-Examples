/**
 * inheritance in ES 5
 */

function ChatUser(name) {

    this.type = "user";
    this.name = name;

}

ChatUser.prototype.getName = function() {

    return this.name;

};

ChatAdmin.prototype = new ChatUser();

ChatAdmin.prototype.constructor = ChatAdmin;

function ChatAdmin(name, role) {

    this.name = name;
    this.role = role;

}

ChatAdmin.prototype.getUserName = function() {

    return this.getName() + " is an " + this.type;

};

ChatAdmin.prototype.getRole = function() {

    return "I am an " + this.role;

};

var chatAdmin = new ChatAdmin("Sally", "Administrator");
