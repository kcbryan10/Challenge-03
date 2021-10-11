// Assignment code here
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "<", ">", "(", ")", "?", "=", "[", "]"]
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var number = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]

function GetCriteria() {
  var userInput = prompt("How long would you like you password to be?")

  if (PasswordLength < 8) {
    alert("Password must be between 8-128 characters")
    return GetCriteria();
  }

  if (PasswordLength > 128) {
    alert("Password must be between 8-128 characters")
    return GetCriteria();
  }

  if (window.confirm("Do you want lower case letters in you password?")) {
    PasswordCriteria = PasswordCriteria.concat(lower);
  }

  if (window.confirm("Do you want upper case letters in you password?")) {
    PasswordCriteria = PasswordCriteria.concat(upper);
  }

  if (window.confirm("Do you want special character in you password?")) {
    PasswordCriteria = PasswordCriteria.concat(special);
  }

  if (window.confirm("Do you want numbers in you password?")) {
    PasswordCriteria = PasswordCriteria.concat(number);
  }

  if (PasswordCriteria.length === 0) {
    alert("Please choose at least one Character Choice");
    return GetCriteria();
  }

  var options = {
    PasswordLength,
    PasswordCriteria
  }

  return options;
}

var generateBtn = document.querySelector("#generate");


function writePassword() {
  var password = GeneratePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
