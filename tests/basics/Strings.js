let name = "uday kumar";

console.log(name.length)

let firstName = name.slice(0,4)

console.log(firstName)

let names = name.split(" ")
console.log(names[0])
console.log(names[1].trim())


//convert string to integer
let a = "10"
let b = "20"

let diff = parseInt(a) - parseInt(b)

console.log(diff)

console.log(diff.toString())

let fullName = name + " manikyam"
console.log(fullName)

let i = fullName.indexOf('ma')

console.log(i)

let j = fullName.indexOf('ma', i+1)


console.log(j)

let count = 0;
while(i!=-1){
    count++
i = fullName.indexOf('ma', i+1)
}

console.log(count)