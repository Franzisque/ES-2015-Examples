/**
 * push assigned strings into an array with
 * spread-parameters
 */
function storeChatUsers(...chatUserStorage) {

    let firstChatUser = chatUserStorage[0];

}

storeChatUsers("Ann", "Sally", "Tim");

/**
 * assign first string to variable user1,
 * push the following into the array remainingUsers
 * @type {string[]}
 */
let [user1, ...remainingUsers] = ["Ann", "Tim", "Bob"];