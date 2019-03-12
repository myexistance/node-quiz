const fs = require('fs'); // file system module

//writing in the file called message.txt inside the folder callied files
fs.writeFile('./files/message.txt', 'Hello Node.js', (err) => {
  if (err) throw err;
  console.log('The file has been saved');
});
