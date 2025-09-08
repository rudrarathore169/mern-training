// let arr = [10,20,30,40,50];

// let result  = arr.findIndex((item)=>item>30);
// let output  = arr.find((item)=>{
//     return item>30
// });
// console.log(result);
// console.log(output);

// let result = arr.some(item=>(item%2!==0));
// console.log(result);

// let output = arr.every(item=>item%2==0);
// console.log(output);

// let arr = [10,20,30,40,50,["rudra","pratap","singh","rathore",[true,false]]];

// let newarr = arr.flat(2);

// console.log(newarr);

// let arr = [10,20,30];

// let result =arr.join("/");

// console.log(result)

// let date  = "16-09-2025";

// let result = date.split("-");

// console.log(result)

// let output = result.join("/");
// console.log(output);

// let arr  = [10,20,30];
// let result = arr.reverse();
// console.log(result)

// let arr = [1,5,6,3,5,6,9,32];
// let result = arr.sort((a,b)=>(a-b));

// console.log(result);

// let arr = [10,20,30,40,50];


// let result = arr.map((item)=>{
//     return item**2;
// })
// console.log(result);

// let arr = [10,20,30,40,50];


// arr.forEach((item)=>{
//    console.log(item);
// })

// string methods

// charat , indexof , lastindexof, includes
// trim , split, slice, toUpperCase, toLowerCase

// let str = "Rudra pratap singh Rathore";
// let result =str.charAt(6);
// let result = str.indexOf("r");
//  let result = str.lastIndexOf("r");
//  let result =  str.includes("rudra");

// console.log(result)

// let str = "     rudra pratap singh rathore";
// console.log(str.length);
// let result = str.trim();
// console.log(result.length);

// let output = str.split("h");
// console.log(output);

// let str = "rudra pratap singh rathore";

// let result= str.slice(3,6);
// console.log(result);

// let str = "rudra";
// let str1 = "pratap";

// let result = str.concat(" ",str1);
// console.log(result);

// let str = "rudra pratap singh rathore";

// console.log(str.replace("r","hello"));
// console.log(str.replaceAll("r","l"));

//object methods
//keys, values, entries, freeze, seal, hasown, assign

// let obj = {
//     firstName : "rudra pratap",
//     lastName : "singh rathore",
//     gender: "Male"
// }

// let result = Object.keys(obj);
// let values = Object.values(obj);
// let entries = Object.entries(obj);
// console.log(result);
// console.log(values);
// console.log(entries);

// Object.freeze(obj);
// delete obj.firstName;
// console.log(obj);

// Object.seal(obj);
// obj.firstName="sudhir";
// console.log(obj);

// console.log(Object.hasOwn(obj,"gender"));

// let obj = {
//     firstName: "rudra pratap ",
//     lastName: "singh rathore"
// }

// let obj1 = {
//     firstName: "vinay",
//     gender: "Male",
//     address: "rajsamand"
// }

// console.log(Object.assign(obj,obj1));

// let arr=[10,20,30];

// let arr1 = [arr];

// console.log(arr==arr1);

// spread or rest

// let arr = [10,20,30]

// let arr1 = [...arr]

// let arr2 = [...arr,...arr1]

// arr1.push(1000);

// console.log(arr1);
// console.log(arr);
// console.log(arr2);

// let obj1 ={
//     firstname:"rudra",
//     gender:"Male",
//     address:"Jaipur"
// }

// let name  = "techno";

// let obj2 = {...obj1,firstname:"vinay",name};
// console.log(obj2);

let obj={
    firstName: "rudra",
    lastName:"pratap"
}

let {firstName,...rest}= obj;

console.log(firstName);
console.log(rest);







