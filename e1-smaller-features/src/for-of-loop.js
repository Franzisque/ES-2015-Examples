let chatUserArray = ["Ann", "Tom", "Bob"];
chatUserArray.newUser = "Sally";

for (let chatUser in chatUserArray) {

    console.log(chatUser);

}

for (let chatUser of chatUserArray) {

    console.log(chatUser);

}