$(document).ready(function() {

	// Greeting updater
	var d = new Date();
	var time = d.getHours();
	var message = "";

	if (time >= 5 && time < 12) {
		message = "Good morning";
	} else if (time >= 12 && time < 18) {
		message = "Good afternoon";
	} else {
		message = "Greetings";
	}
	$("#greeting").html(message);


});
