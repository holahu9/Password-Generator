// Assignment Code
var generateBtn = document.querySelector("#generate");
// different password data types user choose put into arrays
var num= "1234567890".split("");
var specialChar = "!@#$%^&*()".split("");
var lower = "abcdefghijklmnopqrstuvwxyz".split("");
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var yourPassword = [];

// ask users to confirm how many characters they want to set for their password
function generatepassword{
var passLength = prompt( how many characters would you like? ( choose from 8-128 characters) );
passLength = parseInt(passLength);
//if the answer is out of the range
if (passlength<8 || passlength>128){
  alert( password length must be between 8-128 characters, please enter again );  
}

else { 
        var pickNum = confirm (would you like numbers in your password?);
      
        var pickChar = confirm (would you like special characters in your password?);
        
        var pickLower = confirm (would you like lowercase characters in your password?);
        
        var pickUpper = confirm (would you like uppercase characters in your password?);
        
        //check options users pick
        if (pickNum){
          yourPassword = yourPassword.concat(num)
          console.log(yourPassword);
        }
        
        if (pickNum && pickChar){
            yourPassword = yourPassword.concat(num, specialChar);
            console.log(yourPassword);
          }

        if (pickNum && pickChar && pickLower){
            yourPassword = yourPassword.concat(num, specialChar, lower);
            console.log(yourPassword);
          }

        if (pickNum && pickChar && pickLower && pickUpper){
          yourPassword = yourPassword.concat(num, specialChar, lower, upper);
          console.log(yourPassword);
        }

      console.log("Your password options are: ");
      console.log(yourPassword);
    }
    var randomPassword = "";
      
    for (var i = 0; i < passLength; i++) {
      randomPassword = randomPassword + yourPassword[Math.floor(Math.random() * yourPassword.length)];
      console.log(randomPassword)
    }
    return randomPassword;
}

// Write password to the #password input
function writePassword() {
var password = generatePassword();
var passwordText = document.querySelector("#password");

passwordText.value = password;
}