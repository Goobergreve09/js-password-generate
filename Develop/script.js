// Function to generate a password with a specified length and character set
//Length meaning desired character length of passsword
//characterSet represents a set of characters that the password is being generated from;
//The 'generatePassword' function will randomly slect characters from the characterSet
function generatePassword(length, characterSet) {
  var password = '';
  //'var i = 0; declares variable i and gives it the value of 0 - typically used to keep track of current iteration
  //i < length specifies the condition that must be true for loop to continue - loop will continue for as long as
  // i is less than the value of length(0 is less than character length)
  //i++ is used to modify variable after each iteration, (i = i+1) increment i by 1.
  //when the 'for' loop is called it will repeat the block of codeas long as condition 'i < length' is true
  //i will start at 0 and increment by 1 iteration until reaching the value of 'length'
  for (var i = 0; i < length; i++) {

  //The Math.random() function in JavaScript generates a random floating-point number between 0  and 1 . This means it ->
  // can produce decimal numbers. It's used to generate random values.
  //The Math.floor() function is used to round down a decimal number to the nearest integer. 
  //It's used to convert the result of Math.random() to a whole number.
  // chacterSet.length is the number of characters in that specified string
    var randomIndex = Math.floor(Math.random() * characterSet.length);

    // password is a string variable that is used to store the password
    // '+=:' is the addition assignment operator, which is used to add the value on ->
    // the right side to the existing value of the variable on the left side
    // 'characterSet' is a string that contains the set of characters from
    // which you want to generate the password.
    //charAt(randomIndex) is a method that is used to extract a character from the characterSet string at a specific index. randomIndex is 
    // a random index generated within the 'characterSet' string, so it selects a character randomly from the set.
    password += characterSet.charAt(randomIndex);
  }
  //When a function executes a return statement, it immediately exits the function and sends the specified value back to the place where the function was called.
  return password;
}

//The full function together reads like this:

//    function generatePassword(length, characterSet) {
//    var password = '';
//    for (var i = 0; i < length; i++) {
//    var randomIndex = Math.floor(Math.random() * characterSet.length);
//    password += characterSet.charAt(randomIndex);
//    }
//    return password;
//  }
// __________________________________________________________________________


//'var generateBtn' declares a variable named generateBtn using 'var'
// In JavaScript, you would typically use 'let' or 'const' instead of var to declare variables. The variable will hold a reference to an HTML element.
// 'document' refers to the global document object, which represents the HTML document currently displayed in the browser.
// querySelector("#generate"): This is a method of the document object that searches for and selects an HTML element in the document
var generateBtn = document.querySelector("#generate");

// Add eventlistener(upon click) to generate button
generateBtn.addEventListener("click", function() {
  var passwordLength = prompt('Choose a character length between 8 and 128 characters: (ex. "17")');

  // Check if the user input is within the valid range (8 to 128)
  if (passwordLength >= 8 && passwordLength <= 128) {
  //These are all of the prompts
    var includeUppercase = confirm("Would you like to include capital letters? (ex. A, B, C, D)");
    var includeSymbols = confirm("Would you like to include symbols? (ex. !, @, #, $)");
    var includeNumbers = confirm("Would you like to include numbers? (ex. 1, 2, 3, 4)");
    var includeLowercase = confirm("Would you like to include lowercase letters? (ex. a, b, c, d)");
    
    // Define the character sets 
    var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    var numberChars = "0123456789";
    var symbolChars = "!@#$%^&*()_-+=<>?";

    // Combine the selected character sets based on user preferences
    var allChars = '';
    if (includeUppercase) allChars += uppercaseChars;
    if (includeLowercase) allChars += lowercaseChars;
    if (includeNumbers) allChars += numberChars;
    if (includeSymbols) allChars += symbolChars;

    // Check if at least one character set is selected
    if (allChars === "") {
      alert("You must include at least one character set. Please try again.");
    } else {
      // Generate the password based on the user's preferences and length
      var password = generatePassword(passwordLength, allChars);
      
      // Display the generated password
      var passwordText = document.querySelector("#password");
      passwordText.value = password;
    }
  } else {
    alert("Please enter a valid character length between 8 and 128.");
  }
});

//In this code, we added a confirm prompt to ask the user if they want to include capital letters in their password after specifying the character length. The user's choice (either "OK" or "Cancel") is stored in the includeUppercase variable, and you can pass this variable to your generatePassword function, which can use it to determine whether to include capital letters in the generated password.








