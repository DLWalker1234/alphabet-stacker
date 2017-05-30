

// Create an array that contains the letters of the alphabet
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var stack = ""

var loopCount = 26


// The stackLetter function should accept the array as the sole argument
function stackLetters (alphabet) {
    for (var i=0; i < alphabet.length; i++) {
    	stack += alphabet[i]
    	console.log(stack)
    };
};

// Invoke the function and pass in the array
stackLetters(alphabet)
