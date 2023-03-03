// console.log(typeof new String());
// console.log(typeof Object());

// console.log(typeof Number());


function Person(name,age)
{
    this.name=name;
    this.age=age;
}
// Person.prototype.nationality="Indian";

const student1=new Person("Shubham",28);
const student2=new Person("raju",23);

Person.prototype={
    nationality:"Paris"
}
const student3=new Person("jai",21);

const student4=new Person("sita",19);



console.log(student1.nationality);
console.log(student2.nationality);
console.log(student3.nationality);
console.log(student4.nationality);
