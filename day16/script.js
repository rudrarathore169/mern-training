// **********  Math, Number, Date ****************
// Math - sqrt, random, ceil, floor , round

// Number - toFixed, parseInt, parseFloat, isNan , isInteger

// Date - getFullYear, getMonth, getDay, getDate, getHours, getMinutes, getSeconds,
// tetTime, Now(), toDateString, toTimeString

// console.log(Math.sqrt(10));

// console.log(Math.ceil(10.1));

// console.log(Math.floor(10.99999999));

// console.log(Math.round(10.999999));
// console.log(Math.round(10.000001));
// console.log(Math.round(10.499999));
// console.log(Math.round(10.5));

// console.log(Math.pow(2,4));
// console.log(Math.min(10,20,30));
// console.log(Math.max(10,20,30));

// let num =  Math.random();
// console.log(num);
// num = num*10000;
// while(num<=999){
//     num = num*10;
// }
// console.log(Math.round(num));

// let otp = Math.floor(Math.random()*9000+1000);
// console.log(otp);

// let num = 102.2354643214556;

// let newnum=num.toFixed(50);
// console.log(newnum);


// let str = "5";
// let newNum = Number(str);
// console.log(typeof newNum)
// console.log(newNum)

// let str = "kl56px"
// // console.log(typeof Number(str))
// Number.parseInt(str);
// console.log(Number.parseInt(str)); // string should start with number only.

// let str = "shu184bh23am32j32ai323n";
// let newarr= str.split("");

// let sum=0;

// newarr.forEach((item)=>{
//     let newNum = Number(item);
//     if(!Number.isNaN(newNum)){
//         sum+=newNum;
//     }
// })

// console.log(sum);

// console.log(Number.isInteger(122));

// let date = new Date;

// console.log(date.getFullYear());

// console.log(date.getDay());

// console.log(date.getMonth());

// console.log(date.getHours());

// console.log(date.getDate());

// console.log(date.toDateString());

// console.log(date.toTimeString());

// let newDate = Date.now();

// let currDate = new Date(newDate);

// console.log(newDate);
// console.log(currDate);

// let firstvar = 3123;
// console.log(String(firstvar));
// console.log(typeof Boolean(firstvar));

// let firstvar = [1,2,3];
// console.log(String(firstvar));

// console.log("25"%"4");
// console.log("5"+5-10);
// console.log("5"-false);
// console.log([]+[]);
// console.log({}+{});
// console.log([]+{});

//var - global scope variable
//let , const - block scope variable

// {
//     var firstVar = "Rudra";
//     console.log(firstVar);
// }
//     console.log(firstVar);

//hoisting
// console.log(a);

// var a = "rudra";

// console.log(a);
func();
function func(){
    console.log("function called");
}