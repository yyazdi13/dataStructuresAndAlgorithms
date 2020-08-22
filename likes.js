function likes(names) {
    if (names.length >= 4){
        var x = names.length - 2;
        console.log(names[0] + " " + names[1] + " " + "and " + x + " others like this");
    }
   else if (names === null){
       console.log("no one likes this");
   } 
   else console.log(names + " " + "like this");
    
}

likes(["jess", "mess", "fess", "bess", "less"]);
likes([]);
likes(["maria", "adam"]);
