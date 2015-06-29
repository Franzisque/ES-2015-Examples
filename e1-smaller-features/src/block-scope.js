/**
 * variable only existent in if-scope
 */
var chatUserExistent = false;

if (!chatUserExistent) {

    //let chatUser = new ChatUser();

}

/**
 * i is not defined because of block-scope
 * @returns {*}
 */
function loopOverChatUsers() {

    var chatUserArray = ["Ann", "Tom", "Bob"];

    for(let i = 0; i < chatUserArray.length ; i++) {

        // do something with the chatUsers

    }

    return i;

}