/**
 * ChatMessages class with array
 * chatMessages and finished conditions
 */
class ChatMessages {

    constructor() {

    this.chatMessages = ["Hello there!", "Hi you"];
    this.finished = false;

}

    /**
     * return last item of chatMessages array
     * set finished to true if array is empty
     */
    get nextMessage() {

    if (this.chatMessages.length > 0) {

        return "incoming message: " +  this.chatMessages.pop();

    }

    this.finished = true;
    return;

    }

    /**
     * return finished condition if messages done-value
     * should be set to true
     */
    get messagesEmpty() {

        return this.finished;

    }

}

let chatMessageStack = new ChatMessages();

/**
 * iterator for the chatMessageStack
 * @returns {{next: next}}
 */
function messageIterator() {

    return {

        next: function() {

            return {

                value: chatMessageStack.nextMessage,
                done: chatMessageStack.messagesEmpty

            }

        }

    }

}

/**
 * iterable with Symbol.iterator-key
 * implementing it´s own iterator-function
 * @type {*}
 */
let chatMessagesIterable = {

    [Symbol.iterator]: messageIterator

};

/**
 * assign iterator to variable
 * @type {*}
 */
let chatMessageIterator = chatMessagesIterable[Symbol.iterator]();

/**
 * call iterator for the first time - outcome:
 * { value: "Hi you", done: false }
 * @type {*|Object}
 */
let latestMessage = chatMessageIterator.next();

/**
 * second iterator call - outcome:
 * { value: "Hello there!", done: false }
 * @type {*|Object}
 */
let formerMessage = chatMessageIterator.next();

/**
 * third iterator call - outcome:
 * { value: "undefined", done: true }
 * @type {*|Object}
 */
let doneIsTrue = chatMessageIterator.next();


