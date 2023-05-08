class Person{
    constructor(firstName,lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
}
const p1 = new Person("Andy","Dick",26);
p1.getFullName = function(){
    return this.firstName + " "+this.lastName;
}
console.log(p1.getFullName());
const p2 = new Person("Eric","West",30);

console.log(Person.prototype === p1.__proto__);
