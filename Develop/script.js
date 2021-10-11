// Assignment code here
var special = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '?', '/',]
var lower = "qwertyuiopasdfghjklzxcvbnm".split('');
var upper = "QWERTYUIOPASDFGHJKLZXCVBNM".split('');
var number = ['1','2','3','4','5','6','7','8','9']
var PasswordCriteria= [];

function GetCriteria() {
  var input = prompt("How long would you like you password to be?")

  var PasswordLength = parseInt(input);


  if (PasswordLength < 8) {
    alert("Password must be between 8-128 characters.")
    return GetCriteria();
  }

  if (PasswordLength > 128) {
    alert("Password must be between 8-128 characters.")
    return GetCriteria();
  }

  if (confirm("Do you want lower case letters in you password?")) {
    PasswordCriteria = PasswordCriteria.concat(lower);
  }

  if (confirm("Do you want upper case letters in you password?")) {
    PasswordCriteria = PasswordCriteria.concat(upper);
  }

  if (confirm("Do you want special character in you password?")) {
    PasswordCriteria = PasswordCriteria.concat(special);
  }

  if (confirm("Do you want numbers in you password?")) {
    PasswordCriteria = PasswordCriteria.concat(number);
  }

  if (PasswordCriteria.length === 0) {
    alert("Choose at least one character choice");
    return GetCriteria();
  }

  var options = {
    PasswordLength,
    PasswordCriteria
  };

  return options;
}

function GenRandom(){
  var random = Math.floor(Math.random()* PasswordCriteria.length)
  return random
}


function GeneratePassword(){
  var options = GetCriteria();
  var ResultingPassword= []

  for(var i= 0; i < options.PasswordLength; i++){
    var digit = options.PasswordCriteria[GenRandom()];
    ResultingPassword.push(digit);
  }

  return ResultingPassword.join("");
}

var generateBtn = document.querySelector("#generate");


function writePassword() {
  var password = GeneratePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
