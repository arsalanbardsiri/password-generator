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

function generatePassword() {
  //Setting and confirming the number of characters
  var securePass;
  var pass_length;

  //Keep Checking until expectation met
  while (isNaN(pass_length) || pass_length < 8 || pass_length > 128) {
    var num_of_chars = prompt("Number of Characters? (8-128) ");
    pass_length = parseInt(num_of_chars);
    alert(
      isNaN(pass_length) || pass_length < 8 || pass_length > 128
        ? "For Try again! (Legal amount is 8-128)"
        : "You said," + pass_length
    );
  }

  // if (isNaN(pass_length) || pass_length < 8 || pass_length > 128) {
  //   alert("For Try again! (Legal amount is 8-128)");
  //   return;
  // } else {
  //   var confirmation_of_num = confirm("You said, " + num_of_chars);
  //   alert(confirmation_of_num ? "Let's Continue" : "Let's try Again then!");
  // }

  var char_l_case;
  var char_u_case;
  var char_num;
  var char_spec;

  // while (!char_l_case && !char_u_case && !char_num && !char_spec) {
  //   char_l_case = confirm("Do you want to include lowercase?");
  //   char_u_case = confirm("Do you want to include uppercase?");
  //   char_num = confirm("Do you want to include numbers?");
  //   char_spec = confirm("Do you want to include special character?");
  //   alert(
  //     !char_l_case && !char_u_case && !char_num && !char_spec
  //       ? "Please select at least one character type."
  //       : "Great!"
  //   );
  // }

  return securePass;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
