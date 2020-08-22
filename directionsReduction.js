function directionReduce(arr){
    // make new array
    let newArr = [];
    // keep track of each direction by starting at 0
    let N = 0, W = 0, E = 0, S =0;
    //go through the array and keep track of each
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === "North"){
            N++;
            
        }
        else if (arr[i] === "West"){
            W++;
        }
        else if (arr[i] === "East"){
            E++;
    
        }
        else {
            arr[i] === "South"
            S++;
        }
    }
    // if South and North don't cancel each other, add whichever is higher
    if(N-S != 0){
        var north = N-S;
        var south = S-N;
        let i =0;
        if (N > S){
        while (i < north){
            newArr.push("North");
            i++;
        }
        }
        else {
            while(i < south){
                newArr.push("South")
                    i++;
                
            }
        }
    }
    // if E and W dont cancel out, add whichever is higher
    if (E-W != 0){
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



console.log(directionReduce(["East", "South", "North", "West", "North"]))