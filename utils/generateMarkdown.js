// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT'){
  return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  "Copyright <YEAR> <COPYRIGHT HOLDER> Permission is hereby granted, free of charge, to any person obtaining a copy of this 
  software and associated documentation files (the “Software”), to deal in the Software without restriction, including without 
  limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to 
  permit persons to whom the Software is furnished to do so, subject to the following conditions: The above copyright notice
   and this permission notice shall be included in all copies or substantial portions of the Software.  
  THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
   TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. 
   IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
    WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE 
    OR THE USE OR OTHER DEALINGS IN THE SOFTWARE."`
}
  if (license === 'Mozilla'){
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]
    "Exhibit A - Source Code Form License Notice
    This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0. 
    If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/."`
    }
  if (license === 'Apache'){
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    Copyright [yyyy] [name of copyright owner]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at
 
      http://www.apache.org/licenses/LICENSE-2.0
 
    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License."`

  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
  return `# ${response.title}
  
  # Table of Content

  * [licenses](#licenses)
  
  * [description](#description)

  * [installation](#installation)
  
  * [usage](#usage)
  
  * [contribution](#contribution)
  
  * [test](#test)
  
  * [questions](#questions)
  
    
  
  
  ## license:
  ${renderLicenseBadge(response.license)};
      
  ## description:
  ${response.description}
      
  ## installation:
  ${response.installation}
      
  ## usage:
  ${response.usage}
       
  ## contribution:
  ${response.contributing}
      
  ## test:
  ${response.tests}
      
  ## questions:
  ### For questions please contact me at:

  #### GitHub: https://github.com/${response.question}

  #### Email: ${response.email}
      
`;
}

// ${response.license}
module.exports = generateMarkdown;



// ${response.username}

// ${response.email}
//   ##email:

// ${response.profile}
//   ##profile:

// ##username: