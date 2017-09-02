class App {
  constructor(name, message, server, friends) {
    this.name = name;
    this.message = message;
    this.server = 'http://parse.sfm6.hackreactor.com';
    this.friends = [];
    this.messages = [];
    this.rooms = new Set();
    this.room;
    this.username = newSearch;
  }
  init() {
    this.fetch();
    
  }
  send(message) {
    $.ajax({
      // This is the url you should use to communicate with the parse API server.
      url: 'http://parse.sfm6.hackreactor.com/chatterbox/classes/messages',
      type: 'POST',
      data: JSON.stringify(message),
      // '{"objectId":"WHATEVER","username":"DANIEL AND CHRISTINE","roomname":"original","text":"HELLOOOOOOOOOO!!!!","createdAt":"2017-09-01T19:05:17.399Z","updatedAt":"2017-09-01T19:05:17.399Z"}',
      contentType: 'application/json',
      success: function (data) {
        console.log(JSON.stringify(data));
      },
      error: function (data) {
        // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
        console.error('chatterbox: Failed to send message', data);
      }
    });
  }
  fetch() {
    $.ajax({
      // This is the url you should use to communicate with the parse API server.
      url: 'http://parse.sfm6.hackreactor.com/chatterbox/classes/messages',
      type: 'GET',
      // data: JSON.stringify(message),
      contentType: 'application/json',
      data: 'order=-createdAt', // most recent messages first
      success: function (data) {
        // console.log(data);
        pushToMessage(data);
      },
      error: function (data) {
        // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
        console.error('chatterbox: Failed to get message', data);
      }
  
    }).done(function() {
      displayRooms();
      $('li').click(function(event) {
        // console.log('li clicked!');
        this.room = event.target.id;
        // console.log(this.room);
        console.log(this.username);
      });
    });
    
  }
  clearMessages () {
    $('#chats').empty();
  }
  renderMessage (message) {
    //need to actually put message in node that is appended
    $('#chats').append('<p>TESTING JQUERY!!! IMCHANGING UR TEXT LOLLL</p>');
  }
  renderRoom (roomName) {
    this.fetch();
    console.log(app.data);
    // $('#roomSelect').append('<p></p>');
  }
  handleUsernameClick () {
    alert('hi!');
  }
  handleSubmit () {
    alert('hi!');
  }
}


var app = new App();

$(document).ready ( function() {

  $('.username').on("click", function() { app.handleUsernameClick(); });

  //jQuery event: on click of submit button, grab form data and send as message via existing send method
  $('#send').submit(function() { app.send($('#userMessage').val()); });

});

//connect with server
//friends array
//connect to server, query for list of usernames & messages


//sign up

// $.ajax({
//   // This is the url you should use to communicate with the parse API server.
//   url: 'http://parse.sfm6.hackreactor.com/chatterbox/classes/users',
//   type: 'POST',
//   data: '{"username":"NOPEstillUS","password":"one","phone":"555-555-1212"}',
//   contentType: 'application/json',
//   success: function (data) {
//     console.log(JSON.stringify(data));
//   },
//   error: function (data) {
//     // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
//     console.error('chatterbox: Failed to send message', data);
//   }

// });

// $.ajax({
//   // This is the url you should use to communicate with the parse API server.
//   url: 'http://parse.sfm6.hackreactor.com/chatterbox/classes/users',
//   type: 'GET',
//   // data: JSON.stringify(message),
//   contentType: 'application/json',
//   success: function (data) {
//     console.log(JSON.stringify(data));
//   },
//   error: function (data) {
//     // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
//     console.error('chatterbox: Failed to send message', data);
//   }

// });




var pushToMessage = function (data) {
  app.messages = data.results;
  // app.data = data;
  // console.log('appmessages', app.messages);
  // console.log(app.messages);
};






//posting a message
// $.ajax({
//   // This is the url you should use to communicate with the parse API server.
//   url: 'http://parse.sfm6.hackreactor.com/chatterbox/classes/messages',
//   type: 'POST',
//   data: JSON.stringify({
//     username: 'DCDCDCDC',
//     roomname: 'lobby',
//     text: 'OMG IS THIS WORKING??????'}),
//   // '{"objectId":"WHATEVER","username":"DANIEL AND CHRISTINE","roomname":"original","text":"HELLOOOOOOOOOO!!!!","createdAt":"2017-09-01T19:05:17.399Z","updatedAt":"2017-09-01T19:05:17.399Z"}',
//   contentType: 'application/json',
//   success: function (data) {
//     console.log(JSON.stringify(data));
//   },
//   error: function (data) {
//     // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
//     console.error('chatterbox: Failed to send message', data);
//   }

// });


var displayRooms = function() {
            for (var i = app.messages.length - 1; i > 0; i--) {
              app.rooms.add(app.messages[i].roomname);
            }
              
            for (let item of app.rooms) {
              var room = item;
              // console.log(message);
              var $room = $(`<li id=${room}>${room}</li>`);
              
              $room.appendTo($('#roomSelect .dropdown-menu'));
            }
          };
