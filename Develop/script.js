/*
TODO: User Story:

TODO:AS AN employee with access to sensitive data
TODO:I WANT to randomly generate a password that meets certain criteria
TODO:SO THAT I can create a strong password that provides greater security

TODO: Acceptance Criteria:

TODO:GIVEN I need a new, secure password
TODO:WHEN I click the button to generate a password
TODO:THEN I am presented with a series of prompts for password criteria
TODO:WHEN prompted for password criteria
TODO:THEN I select which criteria to include in the password
TODO:WHEN prompted for the length of the password
TODO:THEN I choose a length of at least 8 characters and no more than 128 characters
TODO:WHEN asked for character types to include in the password
TODO:THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
TODO:WHEN I answer each prompt
TODO:THEN my input should be validated and at least one character type should be selected
TODO:WHEN all prompts are answered
TODO:THEN a password is generated that matches the selected criteria
TODO:WHEN the password is generated
TODO:THEN the password is either displayed in an alert or written to the page
*/

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
