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
console.log(adventurer.companions);
console.log(adventurer.companions.toy);
console.log("******************************")
console.log(adventurer.companions.favorites.belongings[1]);

//use an array of objects
const movies = [{title:"TokyoStory"},{title:"The Moon"},{title: 'Mike Jason'}];
//anonymo2us object, applying Index to get the value
console.log(movies[2]);
//if Index does not exist, will appear""undefined", 'console.log' "8888888888" and '************' that 
//making me easily to check the output of my code.
console.log(movies[6],+'8888888');
console.log(movies[0].title);
//console all the titles of the Movies object
for (i=0; i<movies.length; i++){
    console.log(movies[i].title);
}
console.log('**************')

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
console.log(foo.someMethod());// good method, undefined?? not understant why "undefined",I need to figure that out
console.log('****************')
console.log(foo.someMethod);

const foo1 =[{someProperty:'wheat'}, 2,66];
console.log(foo1[0].someProperty);

const foo3 =[
    1,
    "how are you",
    ()=>{
        console.log('happiness');
    }
];
foo3[2]();
console.log("********************************************")

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
        this.legs = 2;
        this.name1=name1;
        this.age=age;
        this.eyes=eyes;
        this.hair=hair;
        this.lovesDogs=lovesDogs
    }

    greet(otherCharacter){
        console.log('hi'+otherCharacter +"!");
    }
    smite(){
        console.log('I smite you vile person');
    }
    setHair (hairColor){
        this.hair = hairColor;
    }
    classyGreeting(otherClassyCharacter){
        console.log('Greetings '+ otherClassyCharacter.name + '!');
    }
   
}

const p1 = new Character("Jokes",74,'white' ,'white',true, true);//no arguments then "undefined"
const enemy = new Character();
console.log(p1.greet('bob'));
console.log(enemy.greet("Jake"));
p1.smite();
console.log('&&&&&&&&&&&&&&&&&&&')
console.log(p1);
const you = new Character ("Jakeson",36, 'black', 'true');
console.log(you);
console.log('$$$$$$$$$$$$$$$$$$$$$$$')
you.hair= "red";
console.log(you);// in "you" instantiation, hair becomes red from black.
p1.classyGreeting(you);
console.log('------------------------------------------------')

class Hobbit extends Character {
    steal(){
        console.log("let's get away!")
        super.steal();
        this.greet1();
    }
    greet1 (otherCharacter){
        this.console.log(`Hobbit says hello to ${otherCharacter}`);
    }
}

    const frodo1 = new Hobbit("Mr. Baggins", 33, "blue","brown");
    console.log(frodo1);
//console.log(frodo.steal());

//console.log(frodo.smite());
    /*hairColors belongs to Class general property that is not allowed to be instantiated
but static property can be inherited.
*/
    class Person {

        static hairColors(){
        return ['black','blue','red'];
    }
    }
/*
this of constructor is applied when instantiating; this in method can be used when calling
this always limit its scope and this has some variable's character.
super applied by child-class and inherit the constructor's argument and methods from fatheer-class

*/
class car111{
    constructor(brand, color, year,miles){
        this.brand=brand;
        this.color=color;
        this.year=2;
        this.miles=miles
    }

    whistle (voice){
        console.log('Woowoo.'+voice)
    }


}

class newCar111 extends car111{
    constructor(){
        super();
    }    
        
    }


const myCar1 = new newCar111('Ford','blue',12,12000);
console.log(myCar1);


 



    
