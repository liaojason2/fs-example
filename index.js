const fs = require('fs');

// List of all the files in the directory
let dirFile = ""
new Promise((resolve, reject) => {
  return fs.readdir(__dirname, (err, files) => {
    if (err) {
      reject(err);
    }
    resolve(files);
  })
}).then(files => {
  dirFile = files.toString();
}).then(() => {
  console.log(dirFile)
}).catch(err => {
  console.log(err);
})