/**
 * function call in ES 5
 */
var receiveChatMessage = function(message) {

    return message;

};

/**
 * arrow operator in ES 6
 */
var receiveChatMessage = message => message;

/**
 * returns without return statement
 */
var returnChatMessage = () => "Hello!";

/**
 * multiple values - also returned without return statement
 */
var joinChatMessage = (message1, message2) => message1 + ' ' + message2;

/**
 * to return an object, braces are required
 */
var returnAChatMessageObject = () => { return { message: "Hello!" } };