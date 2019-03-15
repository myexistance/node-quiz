//console.log("hello buddy!"); //already used standard output objeect is console.log
//var name="Yoobee";
//console.log("hello " + name);

/*console.log(__dirname);
console.log(__filename);
*/
/*JS VersionsBeuBeu
ES5/ES6 - European Computer Manufacturer's Association.*/

/*stdin and stdout are ways of communicating with a running server process*/
/*later these objects can be used to communicate to child process */


/*process.stdout.write("\n\nWhat's you name?\n\n");
process.stdin.on('data', function(useranswer){
	process.stdout.write(`\n\nGood Afternoon ${useranswer} \n\nGlad to meet you! \n\n`);
	process.exit();
});*/
const fs = require('fs');


var request = [
	"Enter your name:",
	"Enter your favourite place in Wellington:",
	"Enter your Birthday month"

];

var response = [];

function myRequest(i){
	/*notice the use of template string, $ and curly braces*/
	process.stdout.write(`\n\n ${request[i]}\n\n`);
/*	process.exit();*/

}
/*listener for data -  reading asynchronously*/
process.stdin.on('data', function(data){
	/*process.stdout.write('\n' + data.toString().trim() + '\n');*/
	response.push(data.toString().trim());

	if (response.length < request.length) {
		myRequest(response.length);

	} else{

		process.exit();
	}



});
process.on('exit', function() {

	var sentence = (`\nHi ${response[0]} Plan to visit ${response[1]} in the month of  ${response[2]}, because its you Birthday;\n`); //backtick, template string
	process.stdout.write(sentence);


   fs.appendFileSync('./files/message.txt', sentence, (err) => {
  		if (err) throw err;
  			console.log('The file has been created!');
		});


});

myRequest(0);




/*process.stdout.write("\n\nEnter the username: \n\n");
process.stdin.on('data', function(username){
	if (username.toString().trim() == "Yoobee") {
		  process.stdout.write(`\n\n ${username}you have entered the correct username\n\n`);



	} else {
			process.stdout.write("\n\n you have entered a wrong username\n\n");

		}
		process.exit();
});*/


 /*process.stdout.write("\n\n Enter the password \n\n");
process.stdin.on('data', function(password){
		if (password.toString().trim() == "Design2019") {
		  process.stdout.write("\n\n $(password} you have entered the correct password\n\n");
		  process.exit();
		} else{
			process.stdout.write("\n\n you have entered a wrong password\n\n");
			process.exit();
		}
	});*/
