var marks = Array(6);

var marks = new Array(10,20,30,40,50,60)

var marks = [10,20,30,40,50,60]


console.log(marks[3])

console.log(marks.length)

console.log(marks.indexOf(40));

console.log(marks.lastIndexOf(30))

console.log(marks.push(70))
console.log(marks)
marks.pop()

console.log(marks)

console.log(marks.unshift(80))

console.log(marks)


console.log(marks.includes(100))

console.log(marks.includes(80))

let subArray = marks.slice(2,7)

console.log(subArray)

var sum = 0

// for(var i=0;i<marks.length;i++){
//     console.log(sum =sum +marks[i])
// }
// console.log(sum)

// let totalMarks = marks.reduce((sum, mark)=>sum+mark,1);
// console.log(totalMarks)

var age = [10,21,30,42]

// var evenAge =[];

// for(let i=0;i<age.length;i++){

//     if(age[i]%2==0){
//         evenAge.push(age[i])
//     }
// }

// console.log(evenAge)

//filter
let newFilterAge = age.filter(age=>age>18)
console.log(newFilterAge)

//map
let newAgeAfter5years = newFilterAge.map(a=>a+5);
console.log(newAgeAfter5years)

//reduce
let totalAgeAfter5Years = newAgeAfter5years.reduce((a,b)=>a+b,0);
console.log(totalAgeAfter5Years)

//chain
let chainSum = age.filter(age=>age>18).map(a=>a+5).reduce((a,b)=>a+b,0);
console.log(chainSum);

//sorting

let fruits = ["pomogranate", "banana", "guava", "apple", "kiwi"];

console.log(fruits.sort())
console.log(fruits.reverse())

let prices = [10, 90, 80, 79,62];
console.log(prices.sort((a,b)=>a-b))
console.log(prices.sort((a,b)=>b-a))