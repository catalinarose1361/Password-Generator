var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialChar = "~`!#$%^&*+=-[]\\';,/{}|\":<>?";
var numbers = "0123456789";

//Loads the page first so user can click on "Generate Password" button and then the prompt and confirm functions will run
document.querySelector("#generateButton").addEventListener("click", function() {
    
    var options = getPasswordSpecs();
   
    var passwordArr = pushSpecifiedChoices(options);
    
    var password = generatePW(options.pwLength, passwordArr);

    document.querySelector("#password").innerHTML = password;
    
    document.querySelector("#copy").addEventListener("click", copyToClipboard);
  });
  
  //This function copies the generated password in the text area, to the user's clipboard
  function copyToClipboard() {
    var copyText = document.querySelector("#password");
    //Only works with textarea or input text element
    copyText.select();
    document.execCommand("copy");
    alert("YOUR NEW PASSWORD HAS BEEN COPIED TO YOUR CLIP-BOARD")
  }
  
  //This function runs the user prompts
  function getPasswordSpecs() {
    
    var pwLength = parseInt(
      prompt("HOW LONG WOULD YOU LIKE YOUR PASSWORD TO BE? PLEASE ENTER A NUMBER BETWEEN 8 AND 128 ")
    );
  
    
    //This function ensures the user enters a number of the correct length
    if (pwLength < 8 || pwLength > 128 || isNaN(pwLength)) {
      
      alert("OOPS, IT LOOKS LIKE YOU INPUT AN INCORRECT VALUE. WOULD YOU LIKE TO START OVER?");

      return getPasswordSpecs();
    }
    //Boolean Prompt
    var confirmSpecial = confirm("WOULD YOU LIKE YOUR PASSWORD TO INCLUDE SPECIAL CHARACTERS?");
    
    //Boolean Prompt
    var confirmNum = confirm("WOULD YOU LIKE YOUR PASSWORD TO INCLUDE NUMBERS?");
   
    //Boolean Prompt
    var confirmLower = confirm("WOULD YOU LIKE YOUR PASSWORD TO INCLUDE LOWERCASE LETTERS?");
    
    //Boolean Prompt
    var confirmUpper = confirm("WOULD YOU LIKE YOUR PASSWORD TO INCLUDE UPPERCASE LETTERS?");
    
    // Returns the user inout
    return {
      pwLength,
      confirmNum,
      confirmSpecial,
      confirmLower,
      confirmUpper
    };
  }
  
    //  This function takes the user input and creates a random password
  function pushSpecifiedChoices(op) {
    var { confirmNum, confirmSpecial, confirmLower, confirmUpper } = op;
   
    var specifiedCharacters = [];
    
    var finalpassword = [];
  
    // logic to determine what types of characters to push into the empty arrays
    if (confirmSpecial) {
      specifiedCharacters.push(specialChar);
      var randomItem = getRandomItemInArr(specialChar);
      finalpassword.push(randomItem);
    }
  
    
    if (confirmNum) {
      specifiedCharacters.push(numbers);
      var randomItem = getRandomItemInArr(numbers);
      finalpassword.push(randomItem);
    }
  
   
    if (confirmLower) {
      specifiedCharacters.push(lowerCase);
      var randomItem = getRandomItemInArr(lowerCase);
      finalpassword.push(randomItem);
    }
  
   
    if (confirmUpper) {
      specifiedCharacters.push(upperCase);
      var randomItem = getRandomItemInArr(upperCase);
      finalpassword.push(randomItem);
    }
  
  
    return {
      specifiedCharacters: specifiedCharacters.join(""),
      finalpassword: finalpassword.join("")
    };
  }
  
  //This function takes in an array and returns a random character from that array 
  function getRandomItemInArr(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }
  
  //This function takes in the user specified length and the array of chosen characters  
  function generatePW(length, passwordArr) {
   
    let final = passwordArr.finalpassword.split("");
    
    //pushes a random selection of characters from the specifiedCharacters variables until it reaches the user defined length
    for (var i = passwordArr.finalpassword.length; i < length; i++) {
      var randChar = getRandomItemInArr(passwordArr.specifiedCharacters);
      final.push(randChar);
    }
    
    // shuffle the array
    return ShuffleArr(final).join("");
  }
  
    //   This function shuffles all the characters in an array 
  function ShuffleArr(arr) {
    for (var i = 0; i < arr.length; i++) {
      var randIndex = Math.floor(Math.random() * arr.length);
  
      var temp1 = arr[i];
      var temp2 = arr[randIndex];
  
      arr[i] = temp2;
      arr[randIndex] = temp1;
    }
    return arr;
  }
