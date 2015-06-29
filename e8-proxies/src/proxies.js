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

console.log(chatUser.userName);

/**
 * zusätzliche validierungen
 * separieren von dingen die nicht direkt etwas mit eig. logik
 * zu tun hat - profiler/observer, logging
 * zusätzliche validierungen für tests - wie oft wird was aufgerufen -> modularität,
 * stress testing - bottlenecks von app aufdecken
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
 * http://de.slideshare.net/BrendanEich/metaprog-5303821
 */