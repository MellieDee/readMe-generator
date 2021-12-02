const generateReadMe = require('../src/readMe-page-template');
const { writeFile } = require('../utils/generateMarkdown');

const sampleAnswers = require('./sample-answers');

writeFile(generatePage(sampleAnswers))
  .then(res => {
    console.log(res);
    return copyFile();
  })
  .then(res => {
    console.log(res);
    console.log('All Done!');
  })
  .catch(err => {
    console.log(err);
  });
