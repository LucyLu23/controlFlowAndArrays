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

