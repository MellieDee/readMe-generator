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
      // ** Description**
      {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project or its purpose. For example, what problem does it solve and how did you solve it? (Required)',
        validate: descriptionInput => {
          if (descriptionInput) {
            return true;
          } else {
            console.log("Please enter your project's description!");
            return false;
          }
        }
      },

      // ** Installation Instructions
      {
        type: 'input',
        name: 'install',
        message: 'Please tell readers how to install or run your program. (Required)',
        validate: installInput => {
          if (installInput) {
            return true;
          } else {
            console.log("Please tell readers how to install or run your program.");
            return false;
          }
        }
      },


      // ** Usage **
      {
        type: 'input',
        name: 'usage',
        message: 'Please tell readers how to use your program and if there are any special features. (Required)',
        validate: usageInput => {
          if (usageInput) {
            return true;
          } else {
            console.log("Want folks to use this? Then tell them how!.");
            return false;
          }
        }
      },

      // ** License **
      {
        type: 'list',
        name: 'license',
        message: 'Pick ONE license.',
        choices: ['GNU GPL 3.0', 'GNU LGPL 3.0', 'Mozilla Public 2.0', 'Apache 2.0', 'MIT', 'Boost Software 1.0', 'The Unlicense']
        //the name is going to be the variable - so 
        //checkbox or list data.
      }
    ])
    .then(data => {
      // readMeData.project.push(answers);

      // console.log(data);
      return data;
    })
    // .then(data => {
    //   if ((data.license.toLowerCase()) === "gnu gpl 3.0") {
    //     var licenseUrl = "https://choosealicense.com/licenses/agpl-3.0/";
    //     return licenseUrl
    //   } else {
    //     var licenseUrl = "https://choosealicense.com/licenses/apache-2.0/";
    //     return licenseUrl
    //   }
    // })

};



// ** GitHub userNAME **
// {
//   type: 'input',
//   name: 'githubUserName',
//   message: 'What is your Github Username? (Required)',
//   validate: nameInput => {
//     if (nameInput) {
//       return true;
//     } else {
//       console.log('Please enter your username!');
//       return false;
//     }
//   }
// },

readMeInforPrompt()
  .then(data => {
    return generateReadMeTemp(data)
  })
  .then(readMe => {
    return writeFile(readMe)
  })
  .catch(err => {
    console.log(err);
  });




// //*********** expressions in TL
// const age = 19
// const message = `You can ${age < 21 ? 'not' : ''} view this page`
// console.log(message) */

// const func = () => 'Hello'
// console.log(`${func()} World`)


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










// // ** URL if applicable
// const readMeUrlPrompt = () => {
//   return inquirer
//     .prompt([
//       {
//         type: 'confirm',
//         name: 'confirmUrl',
//         message: 'Does your project have a deployment URL?',
//         default: true
//       },
//       {
//         type: 'input',
//         name: 'url',
//         message: 'Enter the URL to your project if there is one.',
//         when: ({ confirmUrl }) => confirmUrl
//       },
//     ])
//     .then(dataB => {
//       // readMeData.project.push(answers);
//       // console.log(data);
//       return dataB;
//     })
//   };