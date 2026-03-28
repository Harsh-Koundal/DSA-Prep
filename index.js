// console.log(0.1 + 0.2 == 0.3);

// const promise = new Promise((resolve,reject)=>{
//   const success = true;
//   if(success) resolve("successful");
//   else reject("failed");
// })
// promise
// .then((res)=>console.log(res))
// .catch((rej)=>console.log(rej));


// const user = {
//     name: "Harsh",
//     greet: function (){
//         const arrow = () => {
//             console.log("hello " + this.name);
//         }
//         arrow();
//     }
// }

// user.greet();

//Shalow copy 
// const user1 = {
//     name: "harsh",
//     age: 20,
//     address: {
//         city: "Delhi"
//     }
// };

// const user2 = { ...user1 };

// user2.name = "anku";

// console.log(user2);


// Deep copy 

// const user1 = {
//     name:"test",
//     address:{
//         city:"test",
//     },
// };

// const user2 = structuredClone(user1);
// const deepCopt = JSON.parse(JSON.stringify(user1));

// user2.address.city = "Mumbai";

// console.log(user1.address.city);
// console.log(deepCopt.address.city);


// const arr = [1,2,3,4];

// const test = arr.map((a,b)=>a*b);
// console.log(test);

// const test1 = arr.filter((num)=>num%2===0);
// console.log(test1);

// const test2 = arr.reduce((curr,next)=>curr+next);
// console.log(test2);


