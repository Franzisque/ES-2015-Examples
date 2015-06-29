let chatUser = {

    userName: "Sally",
    age: 25

};

let chatUserValidator = {

    set(chatUser, property, userName) {

        if (property === "userName") {

            if (typeof userName !== "string") {

                throw "invalid data type for username";

            }

            if (userName.indexOf(" ") >= 0) {

                throw "no white spaces in username allowed";

            }

        }

        chatUser.userName = userName;

    }

};

var chatUserProxy = new Proxy(chatUser, chatUserValidator);

chatUserProxy.userName = "Ann";