//Exercise1 - Write an funtion that given an integer N, returns a string of consisting N lowercase letters (a-z)
//such that each letter occurs an odd number of times. We only care about occurence of letters that appear at
//least once in result.

//Put the alphabet in a string
let letters = 'abcdefghijklmnopqrstuvwxyz'

//Split the letters of the alphabet into an array
let letter_list = letters.split('')

//Create a function with a parameter
function RandomWord(N){

    //Create an empty array
    let RandomWord = []

    //Create a for loop that will repeat the number you insert in the function parameter
    for(i=0; i<N; i++){

        //Genarate a random number e save it in a variable
        let randomNumber = Math.floor(Math.random() * (25 - 0 + 1) + 0)

        //Check if the random letter is alredy in the array variable
        if(RandomWord.includes(letter_list[randomNumber])){

            //Check if the number of loops is diferent of the number of the parameter -1
            //Because if it is, we cant add 2 letters
            if(i != (N-1)){

                //Adding 2 of the same letters to have an odd number of letter
                RandomWord.push(letter_list[randomNumber])
                RandomWord.push(letter_list[randomNumber])

                //Adding one to the loop number because we add 2 letters
                i++

            }else{

                //Removing a number from the loop to have the certain amount of letters
                i--
            }

            
        }else{

            //Adding one random letter
            RandomWord.push(letter_list[randomNumber])

        }

    }

    //Creating a varible, and joining the letters from the array RandomWord
    let FinalWord = RandomWord.join('')

    //Returning the FinalWord
    return FinalWord
}

//Execute the function and showing the result in the console
console.log(RandomWord(15))
