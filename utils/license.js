
var licenseUrl = ''

license = (data) => {
  //if data.licanse.toLowrCase = gnu agpl 3.0
  //then remove gnuspace, replace(/ /g, "-")
  
  if ((data.license.toLowerCase()) === "gnu gpl 3.0") {
  var licenseUrl = "https://choosealicense.com/licenses/agpl-3.0/";
return licenseUrl
  } else {
  var licenseUrl = "https://choosealicense.com/licenses/apache-2.0/";
return licenseUrl
  }
  }

module.exports = license













// licenseUrl = ''

// const licenseLink = data => {
//   var license = `${data.license}`.toLowerCase()

//   if (license === 'gnu gplv3') {

//     return licenseUrl = "https://choosealicense.com/licenses/agpl-3.0/";
//   } else {
//     return licenseUrl = "https://choosealicense.com/licenses/${data.license.toLowerCase().replace(/ /g, ' - ')}/)";
//   }
// }


// licenseLink(data) {
//   const license = data.license.toLowerCase();

//   switch (license) {
//     case 'gnu gplv3':
//       licenseUrl =  "https://choosealicense.com/licenses/agpl-3.0/";
//       break;
//     case 'apache 2.0':
//       licenseUrl = "https://choosealicense.com/licenses/${data.license.toLowerCase().replace(/ /g, "-")}/"
//       break;
//   }
// }





// module.exports = licenseLink

  // break;
  // case "gnu lgplv3":
  //   licenseUrl = "https://choosealicense.com/licenses/gpl-3.0/"
  // default:
  //   licenseUrl = "https://choosealicense.com/licenses/${data.license.toLowerCase().replace(/ /g, "-")}/)";