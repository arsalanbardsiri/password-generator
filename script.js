/*
? User Story:

! AS AN employee with access to sensitive data
! I WANT to randomly generate a password that meets certain criteria
! SO THAT I can create a strong password that provides greater security

? Acceptance Criteria:

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

// Assignment code here

// Function to generate the password
function generatePassword() {
  // Setting and confirming the number of characters
  var securePass = "";
  var pass_length;
  var chosen = "";

  // Keep checking until the expected number of characters is met
  while (isNaN(pass_length) || pass_length < 8 || pass_length > 128) {
    var num_of_chars = prompt("Number of Characters? (8-128)");
    pass_length = parseInt(num_of_chars);

    if (num_of_chars === null) {
      return null;
    }

    // Validate the input and provide feedback to the user
    alert(
      isNaN(pass_length) || pass_length < 8 || pass_length > 128
        ? "Please try again! (The legal range is 8-128 characters)"
        : "You chose " + pass_length + " characters."
    );

    if (isNaN(pass_length) || pass_length < 8 || pass_length > 128 || pass_length === 0) {
      continue;
    }

    // Variable to store the chosen character set

    // Keep checking until the expected character types are selected

    var char_spec = confirm("Include special characters?");
    var char_num = confirm("Include numbers?");
    var char_l_case = confirm("Include lowercase letters?");
    var char_u_case = confirm("Include uppercase letters?");

    /*
    
    // Validate the input and provide feedback to the user
    alert(
      !char_l_case && !char_u_case && !char_num && !char_spec
        ? "Please select at least one character type."
        : "Alright!"
    );

    */

    // Check if the user chose to cancel
    if (!char_l_case && !char_u_case && !char_num && !char_spec) {
      var cancel = confirm("Do you intend to quit from the generator app?");
      if (cancel) {
        // User chose to cancel
        return null;
      } else {
        // Continue prompting for character types
        continue;
      }
    }
  }
  // Build the chosen character set based on user selections
  if (char_spec) {
    chosen += "!#$%&'()*+,-./:;<=>?@[]^_`{|}~\"\\";
  }
  if (char_num) {
    chosen += "0123456789";
  }
  if (char_l_case) {
    chosen += "abcdefghijklmnopqrstuvwxyz";
  }
  if (char_u_case) {
    chosen += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  // Generate the password
  for (let i = 0; i < pass_length; i++) {
    var ran_index = Math.floor(Math.random() * chosen.length);
    securePass += chosen[ran_index];
  }

  return securePass;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
