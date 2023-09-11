  // Assignment Code
var generateBtn = document.querySelector("#generate");
  // declared empty random passowrd array
var randomPassword = []
var characterLength = 8

  //declared character variables 
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",];
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var specialChar = ["!","@","#","$","%","^","&","*","(",")",];
var numbers = ["0","1","2","3","4","5","6","7","8","9",];

  // Write password to the #password input
function writePassword() {
  // calling new function to begin user prompt
  var correctPrompt = userPrompt(); 

if (correctPrompt)
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;  
}
  // 1. Prompt user for password criteria
  //    a. password length 8 < 128
  //    b. Uppercase
  //    c. Lowercase
  //    d. Numbers
  //    e. Special Characters
  //prompt the user for password criteria. Asking for password length and what kind of characters they want to include 
function userPrompt() {
  randomPassword = []

  characterLength = parseInt(prompt("How long do you want your password to be? between 8 - 128 characters."));

  // 2. Validate user input 
  //validating the character length and value of the user password input to make sure they enter allowed length and value type
  //validating user enters number and not a string
  if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("Character lenght must be a number between 8 - 128 digits.");
    return false;
  }
  //if true, prompt user for characters to include in password
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
  return true;
}

  // 3. Generate random password
function generatePassword() {
  //use correct prompt criteria to generate randomPassword
  var newPassword = " ";
  //for loop to start generating random values 
  for(var i = 0; i < characterLength; i++) {
    var randomValue = Math.floor(Math.random() * randomPassword.length); 
  newPassword = newPassword + randomPassword[randomValue];
  }
  return newPassword;
}  
  
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


