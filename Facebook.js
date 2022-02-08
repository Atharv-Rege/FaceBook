var database = [
	{
		username: "Boss",
		password: "VerySecret"
	}
];
var newsfeed = [
	{
		username: "Username: Someone",
		Timeline: "Timeline: Something"
	},
	{	
		username: "Username: Someone2",
		Timeline: "Timeline: Something2"
	}
];

var usernamePrompt = prompt("Please enter your username");
var passwordPrompt = prompt("Please enter your password");

function signIn(user, pass) {
	if (user === database[0].username & pass === database[0].password) {
		function facebook_writer(num) {
			num = prompt("Enter the user's number who's profile you want to view 1 (Someone) 2 (Someone2)")
			var myJSON = JSON.stringify(newsfeed[num-1].username);
			document.getElementById("un").innerHTML = myJSON;
			var myJSON2 = JSON.stringify(newsfeed[num-1].Timeline);
			document.getElementById("tl").innerHTML = myJSON2;
		}
		facebook_writer(1);
	}

	else {
		alert("Sorry, Wrong Credentials");
	}
}
signIn(usernamePrompt, passwordPrompt)