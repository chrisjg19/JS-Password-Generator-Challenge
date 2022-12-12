// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

/*so within this function I should probably add all the asked criteria like the special character, uppercase, lowercase and numbers.But how do I do that? */

function generatePassword() {

  /*definetely will need a return command since i am tryin to bring something back, also test to see if a return happens.  */
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specialChar = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

// Alert windows could be set up to prompt if any of these criterias want to be used. Using If or else statements?
 var passLength = prompt("Please input desired password length, between 8 to 128 characters")

 while (passLength < 8 || passLength > 128) {
  alert(
    "Password Length must be between 8-128 characters. Please enter the length again"
  );
  passLength = prompt(
    "What length of passowrd do you need? Please select any length between 8 and 128."
  );
  }
/*I now need to link these confirms to the actual password generator.Also I feel that these should be associated with either a var or another function*/
 var upperConfirm = confirm("Do you want to have uppercase letters included? 'OK' for yes and 'Cancel' for no");
  var lowerConfirm = confirm("Do you want to have lowercase letters included? 'OK' for yes and 'Cancel' for no");
  var numbersConfirm = confirm("Do you want to have numbers included? 'OK' for yes and 'Cancel' for no");
  var specialConfirm = confirm("Do you want to have special characters included? 'OK' for yes and 'Cancel' for no");

  /*here i'll add the confirm conditions to add towards a var to later have that bar included in the final part  */
  var passwordCriteria = "";

if (upperConfirm === true){
  passwordCriteria = passwordCriteria.concat(upperCase);
}

if (lowerConfirm === true){
  passwordCriteria = passwordCriteria.concat(lowerCase);
}

if (numbersConfirm === true){
  passwordCriteria = passwordCriteria.concat(numbers);
}

if (specialConfirm === true){
  passwordCriteria = passwordCriteria.concat(specialChar)

  var characters = Array.from(passwordCriteria)
  /*make a final var to combine everything and put in the return */
  var finalProduct = ""
  /*make a for loop that includes the parameters to include all of the passwordCriteria. */
  for (var i = 0; i < passLength; i++) {
    /*within the var i am using += to add a character each time the loop runs, based on the length of the passwordCriteria. Math.Floor is saying to take the values of the random number from math.random times the length of the password criteria rounded to a whole integer */
    finalProduct += passwordCriteria[Math.floor(Math.random() * passwordCriteria.length)];
  }
}
//inside the return i need to place the final product, I think.
return finalProduct
}
/* so based on this function it seems everything is already set up, what doesnt seem set up is the generatePassword function since there is nothing writtern for it */
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
/*so the generated password is coming back with some issues like this ", Q ?     ,,W   }B/> ,,,,   , 5,      ,,Z%75 " i added the prompt to add 45 characters and that was what was generated :( */
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
