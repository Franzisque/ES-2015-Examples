/**
 * function with default parameter in ES 5
 * @param user
 * @returns {}
 */
function setChatUser(user) {

    user = typeof user !== "undefined" ?  user : "unnamed user";

    return user;

}

/**
 * default parameter in ES 6
 * @param user
 * @returns {*}
 */
function setChatUser(user = "unnamed user") {

    return user;

}