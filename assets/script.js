// Assignment code here
const charset = {
  number: '0123456789',
  extended: '@%+\/!#$^?:,"(){}[]~-_.<>',
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  lowercase: 'abcdefghijklmnopqrstuvwxyz'
}

function generatePassword() {
  var passwordSet ="";

  var length = window.prompt("How long do you want your password? Enter a number from 8 to 128.");
  if (length < 8) {
    alert("Must be between 8 and 128.")
    return;
  }
  else if (length > 128) {
    alert("Must be between 8 and 128.")
  return;
  }
  
  var numbers = window.confirm("Would you like to use numbers? Yes = 'Ok', No = 'Cancel'.");
  if (numbers) {
    passwordSet += charset.number;
  };

  var lowercase = window.confirm("Would you like to use lowercase letters? Yes = 'Ok', No = 'Cancel'.");
  if (lowercase) {
    passwordSet += charset.lowercase;
  };

  var uppercase = window.confirm("Would you like to use uppercase letters? Yes = 'Ok', No = 'Cancel'.");
  if (uppercase) {
    passwordSet += charset.uppercase;
  };

  var extended = window.confirm("Would you like to use extended characters? Yes = 'Ok', No = 'Cancel'.");
  if (extended) {
    passwordSet += charset.extended;
  };

  
  var password = "";
  for (var i = 0; i < length; i++) {
    password += passwordSet[Math.floor(Math.random() * passwordSet.length)]
  }
  return password;

}


writePassword();

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
