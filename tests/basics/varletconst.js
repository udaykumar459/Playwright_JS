//var scope - gloabl and function level
//let scope - global and  block level and not at function level - cannot redefine
// conste scope - glocal but we cannot redefine and reassign

// let a = 10

// if(1==1){

//    var a=20
// }


//var
function values(){
    if(1==1){
    var a=30;
}
console.log(a)
}
 values()


console.log(b)
var b = 1;

var name = "uday"
var name = "kumar"
console.log(name)

for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log("var i:", i), 1000);
}

 //let

//  function values1(){
//     if(1==1){
//     let a=30;
// }
// console.log(a)
// }
//  values1()

//  console.log(c)
//  let c = 2

//  let name1 = "uday"
// let name1 = "kumar"
// console.log(name1)

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log("let i:", i), 1000);
}