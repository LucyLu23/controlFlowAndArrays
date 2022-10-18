const myCar = {
    make: 'Honda',
    model: 'accord',
    year: 1990,
    isLoud: true
}
console.log(myCar.year);
console.log(myCar.model);

const groceryList = ['chicken', 'rice','bread','cheese'];
groceryList[0]; // first
groceryList[1]; // second

const chicken = {
    wing: 2,
    flavor: "mojo",
    color: 'white'
}

const house = {
    door: 9,
    windows: 6,
    roof: 'green',
    year: 1990,
    quality: 'good'

}
house.backWindow = 2;
console.log(house); 
house.bathrooms = 3;
house.window1= 'red';

const myPet ={
    name: "tiger",
    age: 6,
    color: "brown",
    personality: 'gentle',
    eyes: 2,
    favoriteThings: ['playing ball', 'playing water'],
    name: 'Angel'
};
console.log(myPet);
myPet.color;
console.log(myPet.color);
myPet.fur = 'long';

// myPet ={
 //   age:12
//} // change the age using object, will be wrong.

myPet.age = 12; // correct

console.log(myPet.name);// will give you the last "name". try to get the unique property
// key need to be unique
// if having, then taking out, if no , then put the property to the obj.

const obj = {
    salutation : 'hi',
    count:6
}
// does a value exists inside of obj
if (obj.salutation === 'hi'){
    console.log('ok');
}
for (let i = 0; i<obj.count; i++){
    console.log(i);
}

let result = obj.hasOwnProperty('salutation');
console.log(result);

class Vehicle{
    constructor(make, year, brand){
        this.make = make;
        this.year = year;
        this.brand= brand;
    }

}
const myCar1 = new Vehicle('Ford', 2012, 'Ford1');
console.log(myCar1);

let newArr=[1,2,3,66,32,23];
newArr.forEach(1);
console.log(newArr.forEach(1));