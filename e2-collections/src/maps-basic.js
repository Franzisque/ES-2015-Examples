/**
 * set the key and value of a map
 * @type {Map}
 */
let chatMessageMap = new Map();

chatMessageMap.set("Ann", "Hello!");

chatMessageMap.get("Ann");

/**
 * check if map has certain key
 * @type {Map}
 */
chatMessageMap.has("Ann");

/**
 * delete key - value gets automatically deleted
 */
//chatMessageMap.delete("Ann");

/**
 * get size which is 0 in this case
 */
chatMessageMap.size;

/**
 * map can have objects as key as well as value
 * @type {{x: number}}
 */
let chatUserObject = { name: "Ann" };

let messageObject = { message: "Hello!" };

let chatObjectMap = new Map();

chatObjectMap.set(chatUserObject, messageObject);

chatObjectMap.has(messageObject);



let chatMessageMap1 = new Map()
    .set("Ann", "Hello!")
    .set("Tom", "Hi");

for (let value of chatMessageMap1.values()) {

    console.log(value);

}

for (let item of chatMessageMap1) {

    console.log(item[0], "says ", item[1]);

};

let chatMessageMap2 = new WeakMap();

let chatUser = { name: "Ann" };

chatMessageMap2.set(chatUser, "Hello!");

chatMessageMap2.get(chatUser);
