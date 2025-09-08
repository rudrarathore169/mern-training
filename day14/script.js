// const array = [1, 2, 2, 3, 4, 4, 5];

// const uniqueArray = array.filter((item, index) => {
//   return array.indexOf(item) === index;
// });

// console.log(uniqueArray); // [1, 2, 3, 4, 5]

// let arr=[1,1,2,3,4,4,5]
// let b=[]

// for(let i=0;i<arr.length-1;i++){
//     if(arr[i]!=arr[i+1]){
//         b.push(arr[i]);
//         if(i===arr.length-2){
//             if(arr[i]!=arr[i+1]){
//                 b.push(arr[i+1])
//             }
//         }
//     }
// }

// console.log(b);


// let arr = [1,[2,[3,4],5],6];
// var b=[];

// function func(arr){
//       for(let i of arr){
//         if(i.length>1){
//             func(i);
//         }
//         else{
//             b.push(i);
//         }
//       }
// }
// func(arr);
// console.log(b);

// let arr = "hello";
// let str=arr.split('');
// for(let i=0;i<str.length/2;i++){
//     let s = str[i]; 
//     str[i] = str[str.length-1-i];
//     str[str.length-1-i]=s;
// }
// arr = str.join('');
// console.log(arr);

// let a = [1,2,3,4];
// let b = [3,4,5,6];

// let arr=[];
// let brr=[];

// for(let i=0;i<a.length;i++){
//     arr[a[i]] = 1;
// }
// for(let i=0;i<b.length;i++){
//     if(arr[b[i]]>=0){
//         brr.push(b[i]);
//     }
// }
// console.log(brr);

// function intersection(a,b){
//     let ans=[];

//     for(let i=0;i<a.length;i++){
//         if(a.includes(b[i]))
//             ans.push(b[i]);
//     }

//     console.log(ans)

// }

// intersection([1,2,3,4],[1,3,4,5,6]);





// const arr1 = [1, 2, 3];
// const arr2 = [3, 4, 5];

// const union = [...arr1, ...arr2].reduce((acc, val) => {
//   if (!acc.includes(val)) acc.push(val);
//   return acc;
// }, []);

// console.log(union); // [1, 2, 3, 4, 5]

// // spread operator creates a shallow copy means original pe change karne se copy waale pe farak nhi padega





// function binarySearch(a,target){
//     let s=0;
//     let e=a.length-1;
//     let mid = Math.floor(s + (e - s) / 2);     // it's not C++ you have to use Math.floor()   cause it gives float values


//     while(s<=e){
//         if(a[mid]===target){
//             return mid;
//         }
//         else if(a[mid]>target){
//             e=mid-1;
//         }
//         else{
//             s=mid+1;

//         }

//         mid= Math.floor(s + (e - s) / 2);

//     }
//     return -1;

// }

// let ans=binarySearch([1,3,5,7,9],7)
// console.log(ans)





















































































































































































