//Exercise7 - In a board game, a piece may advance 1-6 tiles forward depending on the number rolled on a six-sided
//die. If you advance your piece onto the same tile as another player's piece, both of you earn a bonus.
//Can you reach your friend's tile number in the next roll? Create a function that takes your position (a) and your
//friend's position (b) and returns a boolean representation of whether it's possible to earn a bonus on any die roll.
// - You cannot move backward (which is why example #3 doesn't work).
// - If you are already on the same tile, return false, as you would be advancing away.
// - Expect only positive integer inputs.

function possiblebonus(a, b) {

    //Checking if both inputs are numbers
    if(typeof(a) === 'number' && typeof(b) === 'number'){

        //Checking if both inputs are positive numbers, bigger than 0
        if(a >= 1 && b >= 1){

            //Checking if the inputs are diferents
             if(a != b){

                //Checking if input (a) is smaller than input(b)
                if(a<b){

                    //Adding (a) the best die score
                    let c = a + 6

                    //Checking if (a) with the best die score is bigger than (b)
                    if(c >= b){

                        //If (a) with the best die score is bigger than (b), its possible to get a bonus
                        return true
                    }else{

                        //If (a) with the best die score isnt bigger than (b), its not possible to get a bonus
                        return false
                    }

                }else{
                    return 'Your friend tile must be bigger than yours'
                } 
            }else{
                return 'You cant be in the same tile as your friend'
            }
        }else{
            return 'The die number must be bigger than 0'
        }
    }else{
        return 'You must insert only numbers'
    }

    
}

console.log(possiblebonus(1, 8))