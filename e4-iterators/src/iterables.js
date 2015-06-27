/**
 * arrays are iterables and therefore implement the
 * @@iterator-function
 * @type {string[]}
 */
let chatUserStorage = ['Ann', 'Bob', 'Sally'];

let userIterator = chatUserStorage[Symbol.iterator];


/**
 * the second line returns an iterator that can be called with
 * next() that returns the first array entry
 * @type {string[]}
 */
let chatUserStorage = ['Ann', 'Bob', 'Sally'];

let userIterator = chatUserStorage[Symbol.iterator]();

let firstUser = userIterator.next();