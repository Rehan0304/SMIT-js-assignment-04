//todo CHAPTER 17 TO 20
// ?   Q 1
// let arr=[
//     [],
//     [],
// ];

//?   Q 2
// let matrixArr=[
//     [0,1,2,3],
//     [1,0,1,2],
//     [2,1,0,1],
// ];
// // console.log(matrixArr);
// // document.write(matrixArr);
// for (let i=0; i< matrixArr.length; i++ ) {
//     for(let j=0; j < matrixArr[i].length; j++){
//         document.write(matrixArr[i][j]);
//     }document.write("<br>");
// }

//?   Q 3
// for(i=1; i<=10; i++){
//     document.write(i + "<br>");
// }

//?   Q 4
// let table=+prompt("Enter a number to show its multiplication table");
// let tableLength=+prompt("Enter length of multoplication table");
// for(i=1; i<=tableLength; i++){
//     document.write(`${table} * ${i} = ${table*i} <br>`);
// }

//?   Q 5
// let fruitArr=["apple","banana","orange","mango","pineapple"];
// for(let i=0; i<fruitArr.length; i++){
//     console.log(fruitArr[i]);
//     console.log(`element at index ${i} is ${fruitArr[i]}`);
// }

//?   Q 06

// for(let i=0; i<=15; i++){
//     document.write(`${i},`)
// }
// document.write("<br>")
// for(let i=10; i>=0; i--){
//     document.write(`${i},`)
// }
// document.write(" <br>")
// for(let i=0; i<=20; i++){
//     let b=i*2;
//     if (b<=20) {
//         document.write(`${b},`)
//     }
// }
// document.write("<br>")
// for(let i=1; i<=20; i++){
//     let b=(i*2)-1;
//     if (b<20) {
//         document.write(`${b},`)
//     }
// }
// document.write("<br>")
// for(let i=2; i<=20; i += 2){
//     document.write(`${i}K ,`)
// }

//?   Q 07
// let bakery = ["cake", "apple pie", "cookie", "chips", "patties"];
// let search = prompt("search item");
// search = search.toLowerCase();
// let isfound=false
// for (let i = 0; i <= bakery.length - 1; i++) {
//     if(search===bakery[i]) {
//         isfound=true
//         alert(`${search} is available at index ${i} in our bakery`);   
//     }
// }if(isfound===false){
//     alert(`${search} is not available in our bkery`);
// }

//?   Q 08
// let array=[2,5,8,10,20,15,18];
// let largest=array[0];
// for(i=0;i<array.length;i++){
//     if(array[i]>largest){
//         largest=array[i];
//     }
// }document.write(`largest number is ${largest}`);

//?   Q 09
// let array=[5,70,2,50,1,6,45];
// let smallest=array[0];
// for(i=0; i<array.length; i++){
//     if(array[i]<=smallest){
//         smallest=array[i];
//     }
// }document.write(smallest);

//?   Q 10

// for(i=5; i<=100; i+=5){
//     document.write(`${i},`)
// }

//todo   chapter 21 to 25

//?   Q 01

// let firstName=prompt(`please enter your first name`);
// let lastName=prompt(`please enter your last name`);
// let fullName=`${firstName} ${lastName}`;
// alert(`assalam o alaikum ${fullName}`);

//?   Q 02
// let favMobileModel=prompt(`please enter your favourite mobile phone model`);
// let length=favMobileModel.length;
// alert(`my favourite mobile is ${favMobileModel} \n
// length of string is ${length}`)

//?  Q 03
// let country=`Pakistani`;
// console.log(country.indexOf(`n`));

//?   Q 04

// let greet=`hello world`;
// console.log(greet.lastIndexOf(`l`))

//?   Q 05
// let country=`Pakistani`;
// console.log(country.charAt(4));

//?   Q 06
// let firstName=prompt(`please enter your first name`);
// let lastName=prompt(`please enter your last name`);
// let fullName=firstName.concat(` ${lastName}`);
// alert(`assalam o alaikum ${fullName}`);

