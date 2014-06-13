/*
 * GET home page.
 */

exports.index = function(req, res) {
	/*
	 * Not working right now, looks like a Bower.io issue actually since it didn't work from curl 
	var Client = require('node-rest-client').Client;
	client = new Client();
	// set content-type header and data as json in args parameter
	var args = {
		data : {
			to : "+17782402462",
			message: "Hello from the NowServing app running on Heroku!"
		},
		headers : {
			"Content-Type" : "application/json"
		}
	};
	console.log(process.env.BLOWERIO_URL+"messages");
	
	client.post(process.env.BLOWERIO_URL+"/messages", args, function(data, response) {
		// parsed response body as js object
		console.log(data);
		// raw response
		console.log(response);
	});
	*/
	res.render('index', {
		title : 'Express'
	});
};