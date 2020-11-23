// Assignment Code
var submitBtn = document.getElementById("subBtn");
var passwordText = document.getElementById("password");
submitBtn.addEventListener("click", function (event) {
  event.preventDefault();
  generatePassword();
});
var pickNum = "false";
var pickUpper = "false";
var pickLower = "false";
var pickSpecial = "false";

// different password data types user choose put into arrays
var num= ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialChar = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '{', '}', ':', '"', '<', '>', '?', '"'];
var lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upper =  ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var yourPassword = [];

// ask users to confirm how many characters they want to set for their password
function generatePassword(){
var passLength = prompt( "how many characters would you like? ( choose from 8-128 characters)" );
passLength = parseInt(passLength);
//if the answer is in the range
if (passlength>8 && passlength<128){
  
        var pickNum = confirm ("would you like numbers in your password?");
      
        var pickChar = confirm ("would you like special characters in your password?");
        
        var pickLower = confirm ("would you like lowercase characters in your password?");
        
        var pickUpper = confirm ("would you like uppercase characters in your password?");
        
        //check options users pick
        if (pickNum){
          yourPassword = yourPassword.concat(num);
          
        }
        
        if (pickChar){
            yourPassword = yourPassword.concat(specialChar);
           
          }

        if (pickLower){
            yourPassword = yourPassword.concat(lower);
            
          }

        if (pickUpper){
          yourPassword = yourPassword.concat(upper);
          
        }

     
    var randomPassword = "";
      //return value
    for (var i = 0; i < passLength; i++) {
      yourNewPassword = yourPassword + yourPassword[Math.floor(Math.random() * yourPassword.length)];
      console.log(randomPassword);
    }
    passwordText.textContent = yourNewPassword;
}
else{ alert("Must be between 6 and 128");
}

yourNewPassword=[];
}



