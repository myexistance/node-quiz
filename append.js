const fs = require('fs');

var content = "This message is added by you";

fs.appendFile('./files/append.txt', content, function(err){
  if (err) {
    console.log("error");
    console.log(err);

  }else {
    console.log("Content is appended")
  }
})
