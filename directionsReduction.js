/* Instructions:
You're travelling in the desert, and you're exhausted. You have a list of directions that you need to follow 
to get to your destination. They look a lot like this:
['N', 'N', 'W', 'S', 'E', 'W', 'S']
You're a smart person right? You realize that most of these directions are useless. North and south cancel out, 
and east and west cancel out. You could really just simplify these directions to:
['W']
So you walk one unit west, and arrive at your destination without dying of thirst.

You need to write a function called reduceDirections() that will take an array of directions represented as characters. 
You will also return an array of characters, but with the most reduced directions.
  You may only move north, south, east, and west
  Ignore any instructions other than 'N', 'S', 'E', or 'W'
  Each instruction means to move one unit in that direction
  Return an empty array if you're somehow already at your destination but didn't even notice!
*/

/*  Method 1
function directionReduce(arr){
    // make new array
    let newArr = [];

    // keep track of each direction by starting at 0
    let N = 0, W = 0, E = 0, S =0;

    //go through the array and keep track of each
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === "North"){
            N++; 
        } else if (arr[i] === "West"){
            W++;
        } else if (arr[i] === "East"){
            E++;
        } else if (arr[i] === "South"){
            S++;
        }
    };

    // if South and North don't cancel each other, add whichever is higher
    if(N-S > 0 || S-N > 0){
        var north = N-S;
        var south = S-N;
        let i =0;

        if (N > S){
            while (i < north){
            newArr.push("North");
            i++;
            };
        } else {
            while(i < south){
                newArr.push("South")
                    i++;
                
            }
        }
    }

    // if E and W dont cancel out, add whichever is higher
    if (E-W > 0 || W-E > 0){
        let i = 0;
        var east = E-W;
        var west = W-E;
        if (E > W){
            while (i < east){
                newArr.push("East");
                i++;
            }
        }
         else {
            while(i < west){
                newArr.push("West")
                    i++;
            }
        }
    }

    // return the new array
    return newArr;
}
*/

/* Method 2
function directionReduce(arr){
    let idx;
    let reducedArr = [];

    for (let i = 0; i< arr.length; i++){
        //if we come across north and our new array has south already, 
        // then we take out the south from the new array
        // otherwise, we push north into our new array. Repeat for all directions

         if (arr[i] === "North" && reducedArr.includes("South")){
            idx = reducedArr.lastIndexOf("South");
            reducedArr.splice(idx,1);
        } else if(arr[i] === "North") reducedArr.push("North");

        if (arr[i] === "East" && reducedArr.includes("West")){
            idx = reducedArr.lastIndexOf("West");
            reducedArr.splice(idx,1);
        } else if (arr[i] === "East") reducedArr.push("East");

        if (arr[i] === "South" && reducedArr.includes("North")){
            idx = reducedArr.lastIndexOf("North");
            reducedArr.splice(idx,1);
        } else if (arr[i] === "South") reducedArr.push("South");

        if (arr[i] === "West" && reducedArr.includes("East")){
            idx = reducedArr.lastIndexOf("West");
            reducedArr.splice(idx,1);
        } else if (arr[i] === "West") reducedArr.push("West");
    }
    return reducedArr;
}
*/

// Method 3
// This is the cleaner version of method 2

function directionReduce(arr){
    let reducedArr = [];
    for (let i = 0; i < arr.length; i++){
        switch(arr[i]){
            case "North":
                if(reducedArr.includes("South")) reducedArr.splice(reducedArr.lastIndexOf("South"), 1);
                    else reducedArr.push(arr[i]);
                break;

            case "East":
                if(reducedArr.includes("West")) reducedArr.splice(reducedArr.lastIndexOf("West"), 1);
                    else reducedArr.push(arr[i]);
                break;


            case "South":
                if (reducedArr.includes("North")) reducedArr.splice(reducedArr.lastIndexOf("North"), 1);
                    else reducedArr.push(arr[i]);
                break;


            case "West":
                if(reducedArr.includes("East")) reducedArr.splice(reducedArr.lastIndexOf("East"), 1);
                    else reducedArr.push(arr[i]);
                break;
            
        }
       
    }
    return reducedArr;
}





console.log(directionReduce(["East", "South", "North", "West", "North"])); // ['North']
console.log(directionReduce(["North", "South", "South", "West", "North"])); // ['West']
console.log(directionReduce(["North", "South", "South", "West", "North", "East", "Random"])); // []