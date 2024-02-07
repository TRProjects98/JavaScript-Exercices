//Exercise4 - Write a function that takes a number and returns the perimeter of either a circle or a square.
//The input will be in the form (letter l, number num) where the letter will be either "s" for square, or "c"
//for circle, and the number will be the side of the square or the radius of the circle.

//Create a function with a parameter
function perimeter(l, num){

	//Check the value of the parameter l
    switch (l) {

        //In case its equal to 'c'
        case 'c':

            //Return the result of this calculation
            return 6.28 * num
            break;

        //In case its equal to 's'
        case 's':

            //Return the result of this calculation
            return 4 * num
            break;
    
        //In case its not equal to 'c' or 's'  
        default:

            //Return this warnign string
            return `${l} its not a valid input`
            break;
    }
}

console.log(perimeter("s", 7))
console.log(perimeter("c", 4))
console.log(perimeter("c", 9))