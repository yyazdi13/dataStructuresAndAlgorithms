const solution = (arr, fn) => arr.map(fn);

console.log(solution([5,3], ( (num)=> {return num + 1 })));