$.ajax({

    type: "GET",
    url: "assets/chat-users.json",

    success: getChatUsers,

    error: function(xhr, status, error) {

        // handle error

    }

});

function getChatUsers(chatUsers) {

    var firstUserId = chatUsers.users[0].id;

    $.ajax({

        type: 'GET',
        url: "assets/chat-messages.json",

        success: function(message) {

            console.log(message[firstUserId].messageText);

        },

        error: function(xhr, status, error) {

            // handle error

        }

    });

}
