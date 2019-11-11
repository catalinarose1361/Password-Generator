// Step 1:
// 1. Create an array of lowerCase characters
var lowerCase = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];
// 2. Create an array of upperCase characters
var upperCase = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M"];
// 3. Create an array of numbers
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// 4. Create an array of special characters
var specialChar = ["!", "@", "#", "$", "%", "&"];

// Step 2: create a function that asks the user about the specifics of the password:
function userSpecifics () {

    //     -length
    var passwordLength = prompt("How many characters should your password be?");
    //     -lowerCase characters
    var lowercaseOption = confirm("would you like to include lowercase characters?");
    //     -upperCase characters
    var uppercaseOption = confirm("Would you like to include uppercase characters?");
    //     -numbers
    var numbersOption = confirm("would you like to include numbers?");
    //     -special characters
    var specialCharOption = confirm("would you like to include special characters?");
    // Save each of these specifications in a variable. Now we know the password specifics!
    var specifiedCharacters = [specialCharOption, numbersOption, uppercaseOption, lowercaseOption];
    localStorage.setItem(specialCharOption, numbersOption, uppercaseOption, lowercaseOption, passwordLength);

   
}
userSpecifics ();
// 2. once we know the password's specifics, we can now create another variable that will include ALL the characters that the user wants to include. For example, if the user wants to include numbers and special characters only, this new variable will have ONLY numbers and special characters. Where are these coming from? --See Step 1. 

// Step 3:
// 1. create another function that will take two parameters (length and specifiedCharacters), and inside this function create a new variable and assign an empty array to it.

function generate (passwordLength, specifiedCharacters) {
    var newPassword = [];

    
       
    // // This new variable will hold your generated password.
    
    // // 2. this function will also include your loop and push a randomly selected character from specifiedCharacters into a new variable that you just created. So, how many times does this loop run?
    // newPassword.length = passwordLength;


    // var randomValue = specifiedCharacters[Math.floor(Math.random() * newPassword.length)];

    // return newPassword;
   

    
}
// generate ();
// 3. make sure to return the variable after the loop, but still inside the function. This variable may not come in the format you want. You may want to google .join()method. Use it on this variable. 
// Notice how we return a variable from this function!!
// This means that when we execute/invoke this function, we can assign the returned value of this function to a variable.

// Step 4:
// 1. go back to your first function from Step 2, and inside it execute the function from Step 3 while passing two parameters (length and specifiedCharacters). Create a new variable; assign the returned value of the function to this variable.

// 2. now, take this variable and display it in a div or p tag.

// Step 5:
// 1. target your button from html and add an click event listener to it, and execute/invoke the function
