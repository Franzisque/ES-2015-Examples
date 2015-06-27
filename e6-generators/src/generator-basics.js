function* getChatMessages() {

    yield "Hello there!",
    yield  "Hi you";

}

let chatMessageIterator = getChatMessages();

chatMessageIterator.next();

chatMessageIterator.next();

chatMessageIterator.next();

