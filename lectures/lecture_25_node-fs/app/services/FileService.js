const fs = require('fs');

function isFileExists(path) {
  return new Promise(function (resolve, reject) {
    fs.access(path, fs.W_OK, (err) => {
      if (err) {
        reject(err);
        console.error('isFileExists', err)
      }
      resolve();
    })
  })
}

function readFileJSON(path) {
  return new Promise(function (resolve, reject) {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(err);
        console.error('readFileJSON', err)
      }
      resolve(JSON.parse(data));
    })
  })
}


function saveFileJSON(path, data) {
  return new Promise(function (resolve, reject) {
    fs.writeFile(path, JSON.stringify(data, null, '\t'), (err) => {
      if (err) {
        reject(err);
        console.error('saveFileJSON', err)
      }
      resolve(data);
    })
  })
}

module.exports = {
  isFileExists,
  readFileJSON,
  saveFileJSON,
}
