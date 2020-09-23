function mahjong(tiles){
    let hash = {};
    for (let nums of tiles){
        hash[nums] = hash[nums] + 1 || 1;
    }
    let values = Object.values(hash);
    let total = 0;
    let pairs = [];

    for (let i = 0; i < values.length; i++){
        if (values[i] % 3 !== 0 && values[i] % 2 !== 0){
            return "NOT COMPLETE";
        }
        if(values[i] == 2) pairs.push(1);
        if(pairs.length > 1) return "NOT COMPLETE"
        total += values[i];
    }

    if(values.length == 1 && total % 3 !== 2) return "NOT COMPLETE"
    return "COMPLETE"
}

console.log(mahjong('1112223344555')) // NOT COMPLETE
console.log(mahjong('99999999')) // COMPLETE
console.log(mahjong('22')) // COMPLETE
console.log(mahjong('221')) // NOT COMPLETE
console.log(mahjong('999999999')) // NOT COMPLETE
console.log(mahjong('11222333')) // COMPLETE