//Exercise2 - Create a function that takes an array of numbers and return "Boom!" if the digit 7 appears in the
//array. Otherwise, return "there is no 7 in the array".

//Create a function with a parameter
function sevenBoom(arr) {

    //Turn all values from the array to strings
    const arr_string = arr.map((x) => `${x}`)

    //Joining all strings into one string
    const arr_word = arr_string.join('') 

    //Checking if there is 7 in the string
    if(arr_word.includes('7')){

        //If yes returns 'Boom!'
        return 'Boom!'

    }else{

        //If no returns 'There is no 7 in the array.'
        return 'There is no 7 in the array.'
    }
	
}

const number_list = [1, 3, 18, 15, 97]

console.log(sevenBoom(number_list))

