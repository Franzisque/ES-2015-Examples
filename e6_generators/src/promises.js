$.get("assets/chat-users.json").then(function(chatUser) {

    return chatUser.users[0].id;

}).then(function(firstUserId) {

    $.get("assets/chat-messages.json").then(function(message) {

        console.log(message[firstUserId].messageText);

    })

}, handleError);

function handleError() {

    // handle error

}