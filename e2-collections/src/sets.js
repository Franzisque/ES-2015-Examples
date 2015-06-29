/**
 * add values to set
 * @type {*|number}
 */
let chatMessageSet = new Set()
    .add("Hello!")
    .add("Hi");

/**
 * check if set hast value Hello!
 */
chatMessageSet.has("Hello!");

/**
 * try to add an existing value
 */
chatMessageSet.add("Hi");

/**
 * size is still 2
 */
chatMessageSet.size;

/**
 * log Hello! and Hi
 */
for (let chatMessage of chatMessageSet) {

    console.log(chatMessage);

}