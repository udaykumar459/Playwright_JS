//function name
function add(a,b){

return a+b;

}

let sum = add(2,3)

console.log(sum)

//without function name
let sumOFTwoIntegers = function(a,b){
    return a+b;
}

console.log(sumOFTwoIntegers(3,4))

//using => operator in one line

let sumOfNumbers = (a,b)=>a+b;

console.log(sumOfNumbers(4,5))