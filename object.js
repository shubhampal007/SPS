const student1={
    name:"Shubham",
    age:23,
    subject:["Maths","Hindi"],
    showDetail:function(a,b)
    {
        return this.first +" of "+a+ " "+this.last+" of "+b;
    }
};

const student={
    first:"Shubham",
    last:"Pal"
};

let stu=student1.showDetail.call(student,["babarpur","badarpur"]);
 stu=student1.showDetail.apply(student,["babarpur","badarpur"]);

console.log(stu);

// // const student2={};
// // student2.name="Raju";
// // student2.age=20;

// // student2.subject=["Science","Maths"];

// // const student3=new Object();
// // student3.name="Rakesh";
// // student3.age=22;

// // student3.subject=["History","English"];



// // console.log(student3);
// // let ABC=JSON.stringify(student3);
// // console.log(ABC);
// // console.log(JSON.parse(ABC));


// // const object={count:0};

// // Object.defineProperty(object,"increment",{
// //     get:function(){
// //          this.count++;
// //     }
// // });

// Object.defineProperty(object,"show",{
//     get:function(){
//         return this.count;
//     }
// });

// Object.defineProperty(object,"add",{
//     set:function(value){
//         this.count=value;
//     }
// });
// object.add=10;
// console.log(object.show);
// object.increment;
// object.increment;
// console.log(object.show)

// function Student(name,age,score)
// {
//     this.name=name;
//     this.age=age;
//     this.score=score;

// }


// const obj={
//     name:"raju",
//     age:20
// };

// Object.freeze(obj);
// // console.log(Object.isFrozen(obj));
// obj.name="E984n delhi";

// Object.seal(obj);


// console.log(obj);



