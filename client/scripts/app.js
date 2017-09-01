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
		$('#first').text('TESTING JQUERY!!! IMCHANGING UR TEXT LOLLL');
	}
	clearMessages(){}
	renderMessage(){}
	renderRoom(){}
}


var app = new App();