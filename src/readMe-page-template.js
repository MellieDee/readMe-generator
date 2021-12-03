//create the README title
// const licenseLink = require("./utils/license")



const generateReadMeTemp = (data, licenseUrl) => {
  return `
# **${data.title}**

&nbsp;
<img src="https://img.shields.io/badge/license-${data.license.replace(/ /g, "_")}-blue.svg">

&nbsp
***

## **Project Description**
 ${data.description}
***

&nbsp;

## **Installation Instructions**
***
${data.install}

&nbsp;


## **Usage**
***
${data.usage}

&nbsp;


### **License**
***
Licensed under [${data.license}](${licenseUrl}) license.

&nbsp;

`;
}







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






  module.exports = generateReadMeTemp









// const generateReadMeUrl = (dataA, dataB) => {
//   return `
// ## ${dataA.title} URL
// Deploy at *[${dataA.title}](${dataB.url})*

// &nbsp;
// `;

// }