//access to HTML to get element by ID 
var submitBtn = document.getElementById("generate");
var passwordText = document.getElementById("password");

// Add an event listener that fires when a user clicks a button "generate"
submitBtn.addEventListener("click", writePassword); 


// different password character types user choose to put into an array
var num= ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialChar = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '{', '}', ':', '"', '<', '>', '?', '"'];
var lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upper =  ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var yourPassword = [];

// ask users to confirm how many characters they want to set for their password
function generatePassword(){
    var passLength = prompt( "how many characters would you like to be in your password? ( choose from 8-128 characters)" );
    passLength = parseInt(passLength);
    while(passLength<8 || passLength>128 || isNaN(passLength)){
      alert("Your password must be between 8-128 characters. Please try again")
      var passLength = prompt( "how many characters would you like? ( choose from 8-128 characters)" );
    }

 // ask user to confirm character type of password they would like to include  
  
        var pickNum = confirm ("would you like numbers in your password?");
      
        var pickChar = confirm ("would you like special characters in your password?");
        
        var pickLower = confirm ("would you like lowercase characters in your password?");
        
        var pickUpper = confirm ("would you like uppercase characters in your password?");

//loop obove questions if users dont pick any character type of password
        
        while(pickNum ===false && pickChar ===false && pickLower ===false && pickUpper ===false){
          alert(" You must choose at least 1 character type of password ");
        
        var pickNum = confirm ("would you like numbers in your password?");
      
        var pickChar = confirm ("would you like special characters in your password?");
        
        var pickLower = confirm ("would you like lowercase characters in your password?");
        
        var pickUpper = confirm ("would you like uppercase characters in your password?");
        }

        var yourPassword = [];

        //check options user picks & initialize the yourPassword array
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
        console.log(yourPassword);
    
    // create an emty string named yourNewPassword     
    var yourNewPassword = "";
     // fill in the emty string by selecting random characters from array yourPassword
    for (var i = 0; i < passLength; i++) {
      yourNewPassword = yourNewPassword + yourPassword[Math.floor(Math.random() * yourPassword.length)];
      console.log(yourNewPassword);
    }
    //return value
    return yourNewPassword;
    
  }
// write password to the password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }


