// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

let characterSet = [];
let passwordLength = 0;


// Function to prompt user for password options
function getPasswordOptions() { 
  passwordLength = getPasswordLength();
  getCharacterSetOptions();
}

function getPasswordLength() {
  let length = 0;

  while(length < 8 || length > 128 || isNaN(length)) {
    length = prompt("How long would you like your password to be? (choose between 8 and 128 characters)");
    if(length < 8 || length > 128 || isNaN(length)) {
      alert("You must choose a number between 8 and 128.");
    }
  }

  return length;
}

function getCharacterSetOptions() {
  characterSet = [];
  while(characterSet.length === 0) {
    if(confirm("Would you like to use lowercase letters in your password?")) {
      characterSet = characterSet.concat(lowerCasedCharacters);
    } 

    if(confirm("Would you like to use uppercase letters in your password?")) {
      characterSet = characterSet.concat(upperCasedCharacters);
    }

    if(confirm("Would you like to use special characters in your password?")) {
      characterSet = characterSet.concat(specialCharacters);
    }

    if(confirm("Would you like to use numbers in your password?")) {
      characterSet = characterSet.concat(numericCharacters);
    }

    if(characterSet.length === 0) {
      alert("You must select at least one set of characters to use in your password.");
    }
  }
  
}

// Function for getting a random element from an array
function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Function to generate password with user input
function generatePassword() {
  getPasswordOptions();
  
  let password = "";
  for(let i = 0; i < passwordLength; i++) {
    password += getRandom(characterSet);
  }
  
  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);