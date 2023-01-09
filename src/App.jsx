import { useRef } from "react";

const specialCharacters = [
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
const numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
const lowerCasedCharacters = [
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
const upperCasedCharacters = [
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

let passwordLength = 0;
let characterSet = [];

function getPasswordOptions() {
  passwordLength = getPasswordLength();
  getCharacterSetOptions();
}

function getPasswordLength() {
  let length = 0;
  while(length < 8 || length > 128 || isNaN(length)) {
    length = prompt("How long would you like your password to be? (enter a number between 8 and 128)");
    if(length < 8 || length > 128 || isNaN(length)) {
      alert("You must enter a number between 8 and 128");
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
      alert("You must choose at least one set of characters for your password.")
    }
  }
}

function getRandomArrayCharacter(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function App() {
  const passwordRef = useRef();

  function generatePassword() {
    getPasswordOptions();
    let password = "";
    for(let i = 0; i < passwordLength; i++) {
      password += getRandomArrayCharacter(characterSet);
    }
  
    passwordRef.current.value = password;
  }

  return (
    <div className="wrapper">
    <header>
      <h1>Password Generator</h1>
    </header>
    <div className="card">
      <div className="card-header">
        <h2>Generate a Password</h2>
      </div>
      <div className="card-body">
        <textarea
          readOnly
          id="password"
          placeholder="Your Secure Password"
          aria-label="Generated Password"
          ref={passwordRef}
        ></textarea>
      </div>
      <div className="card-footer">
        <button className="btn" onClick={generatePassword}>Generate Password</button>
      </div>
    </div>
  </div>
  )
}

export default App
