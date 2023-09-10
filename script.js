// Assignment Code
var generateBtn = document.querySelector("#generate");

//TODO wrtie function for variable 'generatePassword' that meets acceptance criteria
//TODO make sure you have variables to store users answers
//TODO prompt user for pw length
//TODO verify that length entered is between 8 and 128 characters
      //-if not, keep prompting until they enter a valid length
      //- ask user if they want to include:
      //Capital letters?
      //Lowercase letters?
      //keep track of answers in variables

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
