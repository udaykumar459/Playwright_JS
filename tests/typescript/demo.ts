let msg :string = 'uday';
console.log(msg);


let arr: string[] = ['uday','kumar'];
console.log(arr);



function add(a:number,b:number):number{
    return a+b;
}

console.log(add(2,3));

let person : {name:string,age:number, location:string} = {name:'uday',age:22,location:'India'};
console.log(person);
console.log(person.name);
console.log(person.age);
person.location = 'Hyderabad';
console.log(person.location);