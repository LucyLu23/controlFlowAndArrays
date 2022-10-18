console.log("function lesson");
//function declaration
function one(){
    return "one";
}
one();// calling a function
console.log("one()");
//function expression
const two=() => {
    return 2;
}
//const shortenedTwo = () =>2;
two();
console.log(two())
const a=0;

const lucyLu ={
    name: "Lucy",
    occupation:"studying",
    over21years:true,
    age:100

}
const increaseAge = (person) => {
    //dot notation
    person.age += 1;
    console.log(`Hooray it's your ${person.age} birthdayyyy`);

}


increaseAge(lucyLu);

for (let i=1; i<=7;i++){

    for (let j=1; j<=i;j++) {
        document.write("*"); 
    }
    document.write("<br/>");
}

for (let index1=10; index1>0; index1--){
    document.write(index1)
    console.log(index1)
}

document.write("how are you?");

function areBothEven(n1,n2){
    return n1+n2;
}
areBothEven(23, 66);
console.log(areBothEven(66,99));

function areBothEven1(n1,n2){
    return !(n1%2) && !(n2/2); 
}
document.write('<br/>');
areBothEven1(22,66);
document.write(areBothEven1(22,68));
//let marial = getDevObject('Maria','HTML','CSS','JavaScript');

//function getDevObject(name){
    //let skills =[];
    //for (let i = 1; i<arguments.length; i++){
      //  skills.push(arguments[i]);
    //}
    //return {
      //  devName:name,
        //jobSkills:skills
    //}
//}

//console.log(getDevObject(marial));

const sayName = (name)=> {
    console.log('hello my name is '+ name);
    console.log(`hello my name is ${name}`);
}

sayName ('Kadija');
sayName('Max the Naverick');
sayName('Overton');

const calculateArea = (num1,num2) => {
    console.log(num1*num2);
}
console.log(calculateArea(23,66));


function calculateArea1(radis){
    return 3.14*radis*radis;
}
console.log(calculateArea1(6));

const calculateCircle = radis => 3.14*radis*radis;
console.log(calculateCircle(3));

const planetHasWater = planet => 'Earth' || 'Mars' ? true : false;

console.log(planetHasWater('Earth'));

const planetHasWater1 = function (planet){
    if (planet==='Earth' || planet === 'Mars'){
        return true;
    }else{
        return false;
    }
}
console.log(planetHasWater1('Earth'));
console.log(planetHasWater1("Moon"));




