import Q from 'q';

Q.async(function* () {

    var chatUser = yield $.get("assets/chat-users.json");

    var firstUserId = chatUser.users[0].id;

    var message = yield $.get("assets/chat-messages.json");

    console.log(message[firstUserId].messageText);

})().catch(function(errs) {

    // handle errors on any events

});