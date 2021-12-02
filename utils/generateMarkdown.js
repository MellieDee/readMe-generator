// TODO: Create a function to generate markdown file
const fs = require('fs');
// const { resolve } = require('path');

const writeFile = fileContent => {
  return new Promise((resolve, reject) => {
    fs.writeFile('./READMEgen.md', fileContent, err => {
      // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
      if (err) {
        reject(err);
        //return out of the function to make sure the Promise doesn't accidentally execute the resolve() function as well
        return;
      }
      //if everything went well, resolve the Promise and send successful data to the `.then()` method
      resolve({
        ok: true,
        message: 'File created'
      });
    });
  });
}

module.exports = { writeFile }
