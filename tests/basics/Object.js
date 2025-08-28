let person = {

    firstName : 'uday',
    lastName  : 'kumar',

    fullname : function()
    {
        console.log(this.firstName+this.lastName)
    }
}

// console.log(person)

console.log(person.fullname())
console.log(person.firstName)
console.log(person.lastName)
person.firstName = 'mani'
console.log(person)
person.gender='Male'
console.log(person)
delete person.firstName
console.log(person)

person.age = 37;


console.log('gender' in person)
console.log(person)

for(let key in person){
    console.log(person[key])
}

