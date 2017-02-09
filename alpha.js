console.log("Hello");
// Create an array that contains the letters of the alphabet
var alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

var output = "";

// The stackLetter function should accept the array as the sole argument
function stackLetters (theAlphabetArray) {
    for (var i = 0; i < alphabet.length; i++) {
      if ((i-3)%4 === 0) {
        output += " " , alphabet[i];
        console.log(output);
      }else{
        output += alphabet[i];
        console.log(output);
      }
    }
  }

// Invoke the function and pass in the array
stackLetters(alphabet)
