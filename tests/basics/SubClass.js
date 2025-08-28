const Person = require('./Class');


class Child extends Person
{


 get address() {
    return "Hyderabad"
 }   
constructor(firstName, lastName){

    super(firstName, lastName)
}

}


let child = new Child("Parnika", "Manikyam")
child.fullName()

let person = new Person("Uday", "Manikyam")
person.fullName()

console.log(child.address)
console.log(person.address)

console.log(child.bloodGroup)
console.log(person.bloodGroup)