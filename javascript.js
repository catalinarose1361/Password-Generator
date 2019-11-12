
var lowerCase = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];
var upperCase = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialChar = ["!", "@", "#", "$", "%", "&"];
var button = document.querySelector("#button1")
function userSpecifics () {
    //     -length
    var passwordLength = prompt("How many characters should your password be?");
    //     -lowerCase 
    var lowercaseOption = confirm("would you like to include lowercase characters?");
    //     -upperCase 
    var uppercaseOption = confirm("Would you like to include uppercase characters?");
    //     -numbers
    var numbersOption = confirm("would you like to include numbers?");
    //     -special ch
    var specialCharOption = confirm("would you like to include special characters?");
    
    if (passwordLength<=0) {
        alert("you've input an incorrect value");
    }
    if (lowercaseOption) {
        
        var specifiedCharacters = [];
        specifiedCharacters.push(lowerCase);
    }
    // If the above condition has not been satisfied run the following block of code.
    else {
        // Alert our message to the user.
        var specifiedCharacters = [];
    }
    if (uppercaseOption) {
        
        specifiedCharacters.push(upperCase);
    }
    if (numbersOption) {
        
        specifiedCharacters.push(numbers);
    }
    if (specialCharOption) {
        
        specifiedCharacters.push(specialChar);
    }
    console.log("passwordLength:", passwordLength)
    console.log("specifiedCharacters:", specifiedCharacters)
  
    
    function generate () {
       var newPassword = []; {

            newPassword = specifiedCharacters[Math.floor(Math.random() * passwordLength)]

            
            console.log("new password:", newPassword)
            
            return newPassword.join('');
        }
        
        
    }
    var finale = generate();
    console.log("finale:", finale)
    alert(finale);
    
    
        
    }

    button.addEventListener("click", userSpecifics) 
        // event.preventDefault();
    
 
    