// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

/*so within this function I should probably add all the asked criteria like the special character, uppercase, lowercase and numbers.But how do I do that? */
function generatePassword() {
/*definetely will need a return command since i am tryin to bring something back, also test to see if a return.  */

return "test"
}
/* so based on this function it seems everything is already set up, what doesnt seem set up is the generatePassword function since there is nothing writtern for it */
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
