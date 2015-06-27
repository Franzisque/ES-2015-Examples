/**
 * export arrow function with named export
 */
export let returnChatMessage = () => "Hi!";

/**
 * export function with named axport
 * @param user
 * @returns {*}
 */
export function setChatUser(user = "unnamed user") {

    return user;

};

/**
 * export class with ES 6 default export
 */
export default class ChatUser {

    constructor(name) {

        this.type = "user";
        this.name = name;

    }

    getName() {

        return this.name;

    }

}