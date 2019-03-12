console.log("hello");

var name="yoobee";
console.log("Hello "+ name);

// ES5, ES6 - template string { }

// process.stdout.write("hello\n\n");


process.stdout.write("What is your name?\n\n");

// process.stdin.on('data', function(data) {
//   process.stdout.write(`hello ${data}`);
//   process.exit(); // stop running the data listener
// });
//console.log(__dirname); //to display the directory name
//console.log(__filename); //to display the file name


var request = [
  'Enter your name:',
  'Enter your favorite place:',
  'Enter your Birthday Month:',
]

var response =[];

function myRequest(i){
  process.stdout.write(`\n\n ${request[i]} \n\n`);
  // process.exit();
}

//read input
process.stdin.on('data', function(data){
  response.push(data.toString().trim());
  if (response.length < request.length){
    myRequest(response.length);
  } else {
    process.exit();
  }
});




process.on('exit', function(){
  process.stdout.write(`\n\n hi ${response[0]},
    plan to visit ${response[1]},
    in birthday Month ${response[2]} \n\n  `)
})
myRequest(0);
