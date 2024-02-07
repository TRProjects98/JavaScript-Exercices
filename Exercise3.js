//Exercise3 - Create a function which returns the number of true values there are in an array.

//Create a function with a parameter
function countTrue(arr) {

    //Create a variable to keep count of the number of truths
    let true_counter = 0

    //Check if the array is empty
    if(arr.length === 0){

        //If yes return the original value of the variable, that is 0
        return true_counter

    }else{

        //If not create a lopp tha runs all the list items
        arr.forEach(element => {

            //Check if the list element is true
            if(element){

                //If yes add one to the variable
                true_counter++
            }
        });

        //After the loop, return te variable number
        return true_counter
    }
}

const list = [true, false, false, true, false]

console.log(countTrue(list))