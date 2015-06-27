/**
 * spread operator function in ES 6
 * @param user1
 * @param user2
 * @param user3
 */
function displayAllUsers(user1, user2, user3) {

    return `${user1} ${user2} ${user3}`;

}

var chatUserStorage = ["Ann", "Sally", "Tim"];

displayAllUsers(...chatUserStorage);

/**
 * assign the first string to user1 and the second string
 * to user2
 */
let [user1, user2] = [...["Ann", "Sally"]];

/**
 * assign the first two names to the first two users and
 * the rest to an array called "remainingUsers"
 */
let [user3, user4, ...remainingUsers] = [...["Ann", "Sally", "Tim", "Bob"]];

/**
 * copy a complete array into the rest value
 */
let [...remainingUsers2] = [...["Ann", "Sally", "Tim", "Bob"]];

/**
 * seperate the whole string into single characters and
 * assign them to char1 - char3
 */
let [char1, char2, char3] = [..."Bob"];

/**
 * create an associative array looking like:
 * [1: "S", 2: "a", 3: "l", 4: "l", 5: "y"]
 */
let myUser = [,...'Sally'];