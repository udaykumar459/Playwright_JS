module.exports = class Person{

bloodGroup= "O+ve"
get address()
{
 return "Palasa"
}

//constructor
constructor(fName,lName) {
    this.fName = fName
    this.lName = lName
}

fullName(){

    console.log(this.fName+ " " + this.lName)
}

}

// let person = new Person();

// console.log(person.name);
// console.log(person.loc)





// console.log(new Person("anil", "kumar").fullName())
// console.log(new Person("padma", "kumar").fullName())