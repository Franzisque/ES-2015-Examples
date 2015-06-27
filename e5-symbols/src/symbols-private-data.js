let userId = Symbol();

let chatUser = {

    userName: "Sally",
    age: 25,
    [userId]: "1872340"

};

var userProperties = [];

for(let userProps in chatUser) {

    userProperties.push(userProps);

}


//console.log(Object.getOwnPropertySymbols(chatUser)[0]);

