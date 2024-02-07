//Exercise5 - Given a string, reverse all the words which have odd length. The even length words are not
//changed.

//Create a function with a parameter
function reverseOdd(str) {

    //Split de string to an array of words
	let words = str.split(' ')

    //For each word in the array 
    words.forEach((element, index)=> {
        
        //Split the word to letters
        let letters = element.split('')

        //Check if the number of the letters in the word is odd
        if(letters.length%2 != 0){

            //If yes, go to the array of words and replace, by index, the word joined and in reverse
            words.splice(index, 1, letters.reverse().join(''))
            
        }

    });
 
    //Join the words into one string
    let reverse_odd_words_from_str  = words.join(' ')

    //Return the string
    return reverse_odd_words_from_str 
}

const string = 'Hello Caro Baby World Nice'

console.log(reverseOdd(string))
console.log(reverseOdd("Bananas"))
console.log(reverseOdd("One two three four"))
console.log(reverseOdd("Make sure uoy only esrever sdrow of ddo length"))
