//for(i1=10;i>=1){}




for (let i=1; i<=7;i++){

    for(j=1; j<=i;j++){
    document.write("*");
   }
   document.write("</br>")
}

//my favorite books,
let books=["AAA","BBB","CCC","DDD","EEE",'FFF'];
console.log(books);//["AAA","BBB","CCC","DDD","EEE",'FFF'];
let firstbooks=books[0];
console.log(firstbooks);//["AAA"];
books.reverse();
console.log(books);//["FFF"..."AAA"];
books.join("nihao");
console.log(books);
books.slice(0,2);//["AAA","BBB,"CCC"]
console.log(books);
books.splice(1,3);// ["AAA","EEE",'FFF']
console.log(books);
books.push("H*H");//["AAA","BBB","CCC","DDD","EEE",'FFF',"H*H"];
console.log(books);
books.pop();//["AAA","BBB","CCC","DDD","EEE",'FFF'];
console.log(books);

let a11=10%3; // 1
console.log(a11);
document.write(a11);

for (let index1=10; index1<0; index1--){
    document.write(index1);
    console.log(index1);
}

document.write("good");



