       //mixin
       let sayHiMixin = {
        sayHi(){
            console.log((`Hello  ${this.name}`));
        },
        
        sayBye(){
           console.log((`Bye  ${this.name}`));
        }
       };

       //usage
       class User {
        constructor(name){
            this.name=name;
        }
       }
       // copy the method
       Object.assign(User.prototype, sayHiMixin);

       new User ("dude").sayHi();
       new User ("Bro").sayBye();    
     
