
//** Draft of adding Resource/Credits URLs ** */
// const generateCredits = (creditsData) => {
//   if (!creditsData) {
//     return '';
//   } else {
//     for (let i = 0; i < creditsData.length; i++)
//       return `
// ${creditsData.creditUrl}
// `;
//   }
// };
const generateContribute = contribute => {
  if (!contribute) {
    return 'Not accepting contributors.';
  }
  return `
    ${contribute}
  `;
};

const generateTests = tests => {
  if (!tests) {
    return 'No tests at this time.';
  }
  return `
    ${tests}
  `;
};

// const generateResources = (creditsData.res) => {
//   if (!creditsData) {
//     return 'No resources used.';
//   } 
//   // for (let i = 0; i < (creditsData.resources).length; i++) {
//   //   const url = (creditsData.resources)[i];
//   // return `
//   //   ${url}
//   // `;


//   }
// }





const generateReadMeTemp = (data) => {
  return `
# **${data.title}**

&nbsp;
<img src="https://img.shields.io/badge/license-${data.license.replace(/ /g, "_")}-blue.svg">

&nbsp;
***
 
## **Project Description**
 ${data.description}
***

&nbsp;

## Table of Contents
***
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
* [License](#license)

&nbsp;


## **Installation Instructions**
***
${data.install}

&nbsp;


## **Usage**
***
${data.usage}

&nbsp;



### **Contributing**
***
${generateContribute(data.contribute)}

&nbsp;

### **Tests**
***
${generateTests(data.tests)}

&nbsp;


### **Questions**
***
Reach me directly at  ${data.email}  
Or checkout out my GitHub profile:  [github.com/${data.githubName}](https://github.com/${data.githubName})

&nbsp;



### **License**
***
Copyright (c) ${data.name}. Licensed under the [${data.license}](https://choosealicense.com/licenses) license.

&nbsp;

`;
}

module.exports = generateReadMeTemp




//*******  DRAFT FUNCITONS ****** */
//Licensed under [${data.license}](https://choosealicense.com/licenses/${data.license.toLowerCase().replace(/ /g, "-")}/) license.




// // TODO: Create a function that returns a license badge based on which license is passed in
// // // // If there is no license, return an empty string
//   function renderLicenseBadge(data.license) {

//  }

// // // TODO: Create a function that returns the license link
// // // If there is no license, return an empty string
// function renderLicenseLink(data.license) {

// }

// // // TODO: Create a function that returns the license section of README
// // // If there is no license, return an empty string
//  function renderLicenseSection(data.license) {}















//************ Draft of adding Resource/Credits URLs Startss  **********/

//* [Credits and Resources](#credits-and-resources)


// ## **Credits and Resources**
// ***
// ####
// People or Websites that I found helpful:
// ${generateCredits(creditsData)}

// &nbsp;
//************ Draft of adding Resource/Credits URLs Ends  **********/