// Assignment Code
var generateBtn = document.querySelector("#generate");
// declared empty random passowrd array
var randomPassword = []

//declared character variables 
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",];
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var specialChar = ["!","@","#","$","%","^","&","*","(",")",];
var numbers = ["0","1","2","3","4","5","6","7","8","9",];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  console.log("Hey! You clicked the button!")
  // 4. Display password on the page
  return "Generated password will go here!"
}

// 1. Prompt user for password criteria
//    a. password length 8 < 128
//    b. Uppercase
//    c. Lowercase
//    d. Numbers
//    e. Special Characters

//This fuction will prompt the user for password criteria. Asking for password length and what kind of characters they want to include 
function getPrompt() {
  characterLength = parseInt(prompt("How long do you want your password to be? between 8 - 128 characters."));

  if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("Character lenght has to be a number between 8 - 128 digits. Please try again.");
    return false;
  }

  if (confirm("Do you want to include uppercase letters in your password?")) {
    randomPassword = randomPassword.concat(upperCase);
  }
  if (confirm("Do you want to include lowerCase letters in your password?")) {
    randomPassword = randomPassword.concat(lowerCase);
  }
  if (confirm("Do you want to include special characters in your password?")) {
    randomPassword = randomPassword.concat(specialChar);
  }
  if (confirm("Do you want to include numbers in your password?")) {
    randomPassword = randomPassword.concat(numbers);
  }
}
// 2. Validate user input 
// 3. Generate random password





// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


