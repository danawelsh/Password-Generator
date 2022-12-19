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
  var characterTypes = prompt("Which character types would you like to include in your password?")
  var incNums = prompt("Do you want to include a number?")
  var incLower = prompt ("Do you want to include a lowercase character?")
  var incUpper = prompt ("Do you want to include an uppercase character?")
  var incSpecialCharacter = prompt ("Do you want to include special characters?")

  if incNums == True
    characterTypes = nums
  if incLower == True
    characterTypes = incLower


  // using the input, generate a pool of characters to select from
  //var pool = "if/else statements"
  // after generating the pool, then you can do the for loop

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
passwordBtnEl.on('click', function () {
  var newPassword = passwordGenerator(8);
  passwordDisplayEl.text(newPassword);
});
  
