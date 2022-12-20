// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
function generatePassword() {
  var nums = "0123456789";
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var spcialCharacter = "!@#$%^&*";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var password = "";
  // get user input
  var passwordLength = prompt("how many characters do you want to include in your password?")
  var incNums = confirm("Do you want to include a number?")
  var incLower = confirm ("Do you want to include a lowercase character?")
  var incUpper = confirm ("Do you want to include an uppercase character?")
  var incSpecialCharacter = confirm ("Do you want to include special characters?")
// add if-statements for confirmed characters
  var chars = "";
  if (incNums == true) {
    chars += nums
  }
  if (incLower == true) {
    chars += lowercase
  }
  if (incUpper == true) {
    chars += uppercase
  }
  if (incSpecialCharacter == true) {
    chars += spcialCharacter
  }
// generate for loop to create passwords
  for (var i = 0; i <= passwordLength; i++) {
  var randomNumber = Math.floor(Math.random() * chars.length);
  password += chars.substring(randomNumber, randomNumber +1);
  }
  return password;

}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
  
