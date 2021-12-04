const generateProjectUrl = projectUrl => {
  if (!projectUrl) {
    return 'Does not have a deployment URL.'
  }
  return `
${projectUrl}
`;
}

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


const generateReadMeTemp = (data) => {
  return `
# **${data.title}**
&nbsp;

<img src="https://img.shields.io/badge/license-${data.license.replace(/ /g, " _")}-blue.svg">

&nbsp;

## **Project Description**
***
${data.description}

&nbsp;


## Table of Contents
***
* [Installation](#installation)
* [Usage](#usage)
* [URL](#url)
* [Contributing](#contributing)
* [Tests](#tests) * [Questions](#questions)
* [License](#license)

&nbsp;


## **Installation**
***
${data.install}

&nbsp;


## **Usage**
***
${data.usage}

&nbsp;


## **URL**
***
${generateProjectUrl(data.url)}

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
Reach me directly at  ${data.email} </br>  
Or checkout out my GitHub profile:  [github.com/${data.githubName.replace(/ /g, "")}](https://github.com/${data.githubName.replace(/ /g, "")})

&nbsp;


### **License**
***
Copyright (c) ${data.name}. Licensed under the [${data.license}](https://choosealicense.com/licenses) license.

&nbsp;


##### Return to:
***
* [Installation](#installation)
* [Usage](#usage)
* [URL](#url)
* [Screenshot](#screenshot)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
* [License](#license)

&nbsp;


`;
}

module.exports = generateReadMeTemp