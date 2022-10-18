// static methods can not be instantiated.
const adventurer = {
    name: 'Vivi',
    age: 16,
    hobbies: ['hiking','biking','reading'],
    companions: {
        name: 'dogMike',
        type: 'pet',
        favorites:{
            toy: "fishtoy",
            acitivity: 'lying in the sun',
            belongings: ['blanket','towel','toys','bottle']
        }

    }
}
console.log(adventurer.name);
console.log(adventurer.hobbies[0]);
for(i=0; i<adventurer.hobbies.length;i++){
    console.log(adventurer.hobbies[i]);
}
const foo={
    someArray:[1,23,36,66],
    someObject: {
        someProp: "hlo hat"
    },
    someMethod: () =>{
        console.log("good method")

    }

}
console.log(foo.someArray[0]);// 1
console.log(foo.someObject.someProp); // "hlo hat"
console.log(foo.someMethod());// good method, undefined??????/
console.log('****************')
console.log(foo.someMethod);

const player = {
    name: 'Josh the Great',
    age:36,
    hair: 'black',
    height:180 
}
const bigBadboos={
    name:'jack',
    health:"good"
}
const createEnermy = (name, health)=> {
    newPlayer1 = {

    }
}

class Character {
    //constructor(){
      //  this.legs = 2;
        //this.arms = 2;
        //this.eyes = 2;
        //this.hair="gray"
    
    constructor(name1, age,eyes, hair, lovesCats=false, lovesDogs){
        this.legs = 3;
        this.name1=name1;
        this.age=age;
        this.eyes=eyes;
        this.hair=hair;
        this.lovesDogs=lovesDogs
    }

    greet(otherCharacter){
    console.log('hi'+otherCharacter +"!");
   }

}

const p1 = new Character();
const enemy = new Character();
console.log(p1.greet('bob'));
console.log(enemy.greet("Jake"));

/*setHair(hairColor) {
    this.hair=hairColor;
}*/


class Hobbit extends Character {
    steal(){
        console.log("let's get away!")
        super.steal();
        this.greet1();
    }
    greet1 (otherCharacter){
        this.console.log(`Hobbit says hello to ${otherCharacter}`);
    }
    /*smite(){
        super.smite();
        this.steal();
    }*/
}

const frodo = new Hobbit("Mr. Baggins", 33, "blue","brown");
console.log(frodo);
console.log(frodo.steal());

console.log(frodo.smite());
