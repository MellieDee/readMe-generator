//TODO: Include packages needed for this application

//Packages Used
// const fs = require('fs');
const inquirer = require('inquirer');
const generateReadMeTemp = require('./src/readMe-page-template');
const { writeFile } = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
// functionName = (param -paren optional if only 1 Param-) => {}

const readMeInforPrompt = () => {
  // if (!readMeData.reponses) {
  //   readMeData.responses [];
  // }
  //  return readMeData
  return inquirer
    .prompt([
      // ** Project TITLE **
      {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project? (Required)',
        validate: projectTitleInput => {
          if (projectTitleInput) {
            return true;
          } else {
            console.log('Please enter the project title.');
            return false;
          }
        }
      },
      // ** GitHub userNAME **
      {
        type: 'input',
        name: 'githubUserName',
        message: 'What is your Github Username? (Required)',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter your username!');
            return false;
          }
        }
      },
    ])
    .then(data => {
      // readMeData.project.push(answers);
      // console.log(data);
      return data;
    })
};


readMeInforPrompt()
.then(data => {
return generateReadMeTemp(data)
})
.then(readMe => {
  return writeFile(readMe)
})

// .then(data => {
//   return generateTitle(data)
// })
// .then(pageReadMe => {
//   return writeFile(pageReadMe)
// })
// .then(writeFileResponse => {
//   console.log(writeFileResponse)
//   return copyFile();
// })
// .catch (err => {
//   console.log(err);
// });







    // // ** NAME **
    // {
    //   type: 'input',
    //   name: 'name',
    //   message: 'What is your full name? (Required)',
    //   validate: nameInput => {
    //     if (nameInput) {
    //       return true;
    //     } else {
    //       console.log('Please enter your name!');
    //       return false;
    //     }
    //   }
    // },


    // ** Project Description  **
    // {
    //   type: 'input',
    //   name: 'description',
    //   message: 'Please describe your project.(Required)',
    //   validate: descriptionInput => {
    //     if (descriptionInput) {
    //       return true;
    //     } else {
    //       console.log('Please give the reader some details about your work.');
    //       return false;
    //     }
    //   }
    // }

//pseudocode
// ask user infor for sections of readMe - readMEInfoPrompt() in index.js
// then collect  data into an Object     - readMeData{[]} in index.js
// then activate  MD Text Template       - readMe-page-template.js - export
//then create a MD file with that Text   - generateReadMe

// readMeInforPrompt()
// return readMeData;
// readMeInforPrompt().then(readMeData => {
//   return generateMarkdown(readMeData)
// })
//   .then(pageMD => {
//     return fs.writeFile(pageMD)
//   })
// console.log(userInforPrompt);

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) { }

// // TODO: Create a function to initialize app
// function init() { }

// // Function call to initialize app
// init();



// const generateReadMe = (userName, projectName) => {
// return `
// Name: ${userName}
// Project: ${projectName}`;
// };

// console.log(generateReadMe('Me', 'read'));