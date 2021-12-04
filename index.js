//TODO: Include packages needed for this application

//Packages Used
// const fs = require('fs');
const inquirer = require('inquirer');
const { writeFile } = require('./utils/generateMarkdown.js');
const generateReadMeTemp = require('./src/readMe-page-template.js');
const generateCredits = require('./src/readMe-page-template.js');



// TODO: Create an array of questions for user input
// functionName = (param -paren optional if only 1 Param-) => {}
// ask user infor for sections of readMe - readMEInfoPrompt() in index.js collect as []

const readMeInfoPrompt = () => {
  return inquirer
    .prompt([
      // ** Name **
      {
        type: 'input',
        name: 'name',
        message: 'What is your full name? (Required)',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter your name!');
            return false;
          }
        }
      },

      //** GitHub userNAME **
      {
        type: 'input',
        name: 'githubName',
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


      // ** eMail **
      {
        type: 'input',
        name: 'email',
        message: 'What is your eMail address? (Required)',
        validate: emailInput => {
          if (emailInput) {
            return true;
          } else {
            console.log('Please enter your eMail!');
            return false;
          }
        }
      },

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


      // ** URL if applicable **
      {
        type: 'confirm',
        name: 'confirmUrl',
        message: 'Does your project have a deployment URL?',
        default: true
      },
      {
        type: 'input',
        name: 'url',
        message: 'Enter the URL to your project.',
        when: ({ confirmUrl }) => confirmUrl,
        validate: urlInput => {
          if (urlInput) {
            return true;
          } else {
            console.log("Want folks to use this? Then tell give them the URL!");
            return false;
          }
        }
      },


      // ** Contribution Guidelines **
      {
        type: 'confirm',
        name: 'confirmContribGuide',
        message: 'Do you want contributors?',
        default: true
      },
      {
        type: 'input',
        name: 'contribute',
        message: 'Please tell readers how they can contribute:',
        when: ({ confirmContribGuide }) => confirmContribGuide
      },


      // ** Tests **
      {
        type: 'confirm',
        name: 'confirmTests',
        message: 'Do you have recommneded tests for your project?',
        default: true
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Please describe the tests:',
        when: ({ confirmTests }) => confirmTests
      },


      {
        type: 'confirm',
        name: 'confirmCredit',
        message: "Would you like to add a list of resources?",
        default: true
      },
      {
        type: 'input',
        name: 'credits',
        message: 'Provide the names or URLs of your collaborators, thrid-party assets, tutorials or website useds. To make a list type </br> between each item. Ex: My tutorial.</br>John Doe',
        when: ({ confirmCredit }) => confirmCredit,
        validate: creditUrlInput => {
          if (creditUrlInput) {
            return true;
          } else {
            console.log('Please enter a resource.');
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
      }
    ])
    .then(data => {
      return data;
    })
};


// ** Running the app
readMeInfoPrompt()
  .then(data => {
    return generateReadMeTemp(data)
  })
  .then(readMe => {
    return writeFile(readMe)
  })
  .catch(err => {
    console.log(err);
  });





// ************ Draft of adding Resource/Credits URLs Starts  **********/
// ** Add Resources URLs  */

// const creditsInfoPrompt = (creditsData) => {
//   //If there is not a resources [] then create one
//   if (!creditsData.array) {
//     creditsData.array = []
//   }
//   return inquirer
//     .prompt([
//       {
//         type: 'confirm',
//         name: 'confirmCredit',
//         message: "Would you like to add a resource's website?",
//         default: true
//       },
//       {
//         type: 'input',
//         name: 'creditUrl',
//         message: 'Provide the URL of your collaborator, thrid-party asset, tutorial or website used.',
//         when: ({ confirmCredit }) => confirmCredit,
//         validate: creditUrlInput => {
//           if (creditUrlInput) {
//             return true;
//           } else {
//             console.log('You need to enter the URL!');
//             return false;
//           }
//         }
//       },

//       {
//         type: 'confirm',
//         name: 'confirmAddCredit',
//         message: 'Would you like to enter another resource?',
//         default: false
//       }
//     ])

//     .then(resourcesData => {
//       creditsData.array.push(resourcesData);
//       if (resourcesData.confirmAddCredit) {
//         return creditsInfoPrompt(creditsData);
//       } else {
//         return creditsData;
//       }
//       });
// }

// //** Running both functions */
// readMeInfoPrompt()
//   .then(creditsInfoPrompt)
//   .then(creditsData => {
//     return generateCredits(creditsData.array)
//   })
//   .then(data  => {
//     return generateReadMeTemp(data)
//   })
//   .then(readMe => {
//     return writeFile(readMe)
//   })
//   .catch(err => {
//     console.log(err);
//   });
// ************ Draft of adding Resource/Credits URLs Ends  **********/





  //  //** DRAFT OF Screenshot  CODE Starts  *******
  //  {
  //   type: 'confirm',
  //   name: 'confirmSs',
  //   message: 'Do you have a screenshot for your project?',
  //   default: true
  // },
  // {
  //   type: 'input',
  //   name: 'ssPath',
  //   message: 'Enter the relative path to your image (Ex: ./assets/images/screenShot.png):',
  //   when: ({ confirmSs }) => confirmSs,
  //   validate: ssPathInput => {
  //     if (ssPathInput) {
  //       return true;
  //     } else {
  //       console.log("Enter the RELATIVE path!");
  //       return false;
  //     }
  //   }
  // },
  // {
  //   type: 'input',
  //   name: 'width',
  //   message: 'Enter the width (px) of your image. (Ex: 200)',
  //   when: ({ confirmSs }) => confirmSs,
  // },
  // {
  //   type: 'input',
  //   name: 'height',
  //   message: 'Enter the height (px) of your image. (Ex: 375)',
  //   when: ({ confirmSs }) => confirmSs,
  // },
  // {
  //   type: 'input',
  //   name: 'alt',
  //   message: 'Enter the accessibility alternate text for your image:',
  //   when: ({ confirmSs }) => confirmSs,
  // },
  // ******* DRAFT OF Screenshot  CODE Starts  *******









//  ********************  CODING OUTTAKES AND  NOTES  ******************
// //*********** expressions in TL
// const age = 19
// const message = `You can ${age < 21 ? 'not' : ''} view this page`
// console.log(message) */

// const func = () => 'Hello'
// console.log(`${func()} World`)





    // .then(data => {
    //   if ((data.license.toLowerCase()) === "gnu gpl 3.0") {
    //     var licenseUrl = "https://choosealicense.com/licenses/agpl-3.0/";
    //     return licenseUrl
    //   } else {
    //     var licenseUrl = "https://choosealicense.com/licenses/apache-2.0/";
    //     return licenseUrl
    //   }
    // })

// // TODO: Create a function to initialize app
// function init() { }

// // Function call to initialize app
// init();






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

      // // ** Credits and Resources **
      // {
      //   type: 'input',
      //   name: 'contributors',
      //   message: 'Name your collaborators, thrid-party assets, tutorials or websites used.
      //   validate: usageInput => {
      //     if (usageInput) {
      //       return true;
      //     } else {
      //       console.log("Want folks to use this? Then tell them how!.");
      //       return false;
      //     }
      //   }
      // },