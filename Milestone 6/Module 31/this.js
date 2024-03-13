class Person {
    constructor(name,age){
        this.name= name;
        this.age= age;
    }
    sleep(){
        console.log(`Sleeping Now ${this.name}`);
    }
    activity(){
        this.sleep();
    }
}

const kid = new Person('hasNoName', 1);
console.log(kid);

kid.sleep();


// Vejal

const lazy = kodom.sleep;

 
