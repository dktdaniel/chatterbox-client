class App {
  constructor(name, message, server) {
    this.name = name;
    this.message = message;
    this.server = 'http://parse.sfm6.hackreactor.com';
  }
  init() {
    
  }
  send(message) {
    $.ajax({
        // This is the url you should use to communicate with the parse API server.
      url: 'http://parse.sfm6.hackreactor.com/',
      type: 'POST',
      data: message,
      contentType: 'application/json',
      success: function (data) {
        console.log('chatterbox: Message sent');
      },
      error: function (data) {
        // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
        console.error('chatterbox: Failed to send message', data);
      }
    });
  }
  fetch() {
    //put GET request here!!!!
    $.ajax({
      // This is the url you should use to communicate with the parse API server.
      url: 'http://parse.sfm6.hackreactor.com',
      type: 'GET',
      data: JSON.stringify(message),
      contentType: 'application/json',
      success: function (data) {
        console.log('chatterbox: Message sent');
      },
      error: function (data) {
        // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
        console.error('chatterbox: Failed to send message', data);
      }

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
    $('#roomSelect').append('<p></p>');
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
$.ajax({
      // This is the url you should use to communicate with the parse API server.
      url: 'http://parse.sfm6.hackreactor.com/1/users',
      type: 'GET',
      // data: JSON.stringify(message),
      contentType: 'application/json',
      success: function (data) {
        console.log(JSON.stringify(data));
      },
      error: function (data) {
        // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
        console.error('chatterbox: Failed to send message', data);
      }

    });

