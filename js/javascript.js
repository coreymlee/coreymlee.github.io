$(document).ready(function() {

	// Greeting updater
	var d = new Date();
	var time = d.getHours();
	var message = "";

	if (time >= 5 && time < 12) {
		message = "Good Morning";
	} else if (time >= 12 && time < 18) {
		message = "Good Afternoon";
	} else {
		message = "About Me";
	}
	$("#greeting").html(message);
/*
	$(".personal h3").click( function() {
		viewProjects();
	});
*/
});


function viewProjects() {
	$(".personal").toggleClass("expanded");
}
