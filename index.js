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


// var a = 3;
// console.log(a);


// const parent = document.querySelector(".container");

// parent.addEventListener("click",(event)=>{
//     if(event.target.tagName === "BUTTON"){
//         console.log("Botton Clicked");
//     }
// })



//Debouncing 

// runs function after specific time ;

// function debounce(fn, delay){
//     let timer;
//     return function(...args){
//         clearTimeout(timer);

//         timer = setTimeout(()=>{
//             fn.apply(this,args);
//         },delay);
//     };
// }

// function search(query){
//     console.log("Searching:",query);
// }

// const debounceSearch = debounce(search,500);

// input.addEventListener("input",(e)=>{
//     debounceSearch(e.target.value);
// });


// debounceSearch("H");
// debounceSearch("Ha");
// debounceSearch("Har");
// debounceSearch("Hars");
// debounceSearch("Harsh");


// Throttling

// runs function only ones in specific time ;

// function throttle(fn,delay){
//     let lastCall = 0;
//     return function(...args){
//         const now = Date.now();

//         if(now - lastCall >= delay){
//             lastCall = now;
//             fn.apply(this,args);
//         }
//     };
// }

// function handelScroll(){
//     console.log("Scroll event");
// }

// const throttledScroll = throttle(handelScroll,1000);

// window.addEventListener("scroll",throttledScroll);




// callback function 
// function abc(fn){
//     fn();
// }

// function fn(){
//     console.log("hello");
// }

// abc(fn);


// const arr = [1,2,3,4,5,6,6,];

// // const uniqArr = [...new Set(arr)];

// const uniqArr = arr.filter((item,index)=>{
//     return arr.indexOf(item) === index;
// })
// console.log(uniqArr);


// Valid Parenthesis

// const isValid = (s)=>{
//     const stack = [];
//     const map = {
//          ')':'(',
//          '}':'{',
//          ']':'[',
//     };

//     for(let char of s){
//         if(char==='(' || char==='{' || char === '['){
//             stack.push(char);
//         }else{
//             const top = stack.pop();

//             if(top !== map[char]) return false;
//         }
//     }
//     return stack.length === 0;
// }

// console.log(isValid("()"));
// console.log(isValid(")("));


//polyfill
/*
Array.prototype.myForEach = function(callback){
    for(let i=0;i<this.length;i++){
        callback(this[i],i,this);
    }
}

const arr = [1,2,3,4];

arr.myForEach((item)=>{
    console.log(item);
})
*/

// let a = 10;
// let b = 20;
// [a,b] = [b,a];
// console.log(a,b);

// let arr = [1,2,3,4,5,6];
// let copy = arr[0];

// for(let i=0;i<arr.length;i++){
//     arr[i] = arr[i+1];
// }
// arr[arr.length-1] = copy;

// console.log(arr);

// Debouncing 

/*
function debounce(fn,delay){
    let timer;
    return function(...args){
        clearTimeout(timer);
        timer = setTimeout(()=>{
            fn.apply(this,args);
        },delay)
    }
}

function search(query){
    console.log("Searching:",query)
}

const debouncedSearch = debounce(search, 1000);


debouncedSearch("h")
debouncedSearch("ha")
debouncedSearch("har")
debouncedSearch("hars")
debouncedSearch("harsh")

*/


/*
function flatten(arr){
    let result = [];

    for(let item of arr){
        if(Array.isArray(item)){
            result = result.concat(flatten(item));
        }else{
            result.push(item);
        }
    }
    return result;
};

console.log(flatten([1,2,3,4,[1,2,3,[5,6,7,8]]]));

*/

// && return first falsy value if first value is truthy so it return second value
/*
console.log(true && 0);  // 0
console.log(false && 0); // false
console.log("a" && "b"); // b
*/

//return first truthy value 
/*
console.log(0 || "ok"); // ok
console.log("first" || "x");  // first
*/


// console.log(null == undefined) //ture
// console.log(null === undefined) // false
// console.log(undefined === undefined) // true
// console.log(null == null) // true
// console.log(null === null) // true
// console.log(Number(null)) // 0
// console.log(Number(undefined)) // NaN
// console.log(11 - "sh") // NaN
// console.log("1" - "2") // -1
// console.log("a" + 1) // a1


// console.log(null > 0) // false
// console.log(null >= 0) // true
// console.log(null === 0) // false
// console.log(null == 0) // false

// console.log(0 || 5) // 5
// console.log(0 ?? 5) // 0
// console.log(null ?? 5) // 5

// console.log(null + 1) // 1
// console.log(false + 1) // 1
// console.log(true + 1) // 2
// console.log(undefined + 1) // NaN

// console.log(10 + "hye" + 10) // 10hye10
// console.log({}+{}) // [object Object][object Object]
// console.log([] + [3,53]) // 3,53
// console.log([] + []) // 
// console.log(true === true) // true
// console.log(0.1+0.3 == 0.4) // true
// console.log(0.1+0.3 === 0.4) // true
// console.log(false == []) // true
// console.log(false === []) // false

// console.log(false ==! []) // true
// console.log(false == "") // true
// console.log(false === "") // false

// console.log(false == null)  // false
// console.log(false == undefined) // false
// console.log(false ==! []) // true
// console.log([] == []) // false
// console.log({} == {}) // false
// console.log([] == "") // true
// console.log([] == 0) // true
// console.log([""] == 0) // true
// console.log([1] == 1) // true
// console.log([1] === 1) // true

// How do you create a string in JavaScript? (using quotes and String () constructor)
/*
const name = "Harsh";
const world = 'world'
console.log("Hello " + name + world);

const age = 22;
console.log(`My age is ${age}`);


const str = new String("Hello");
console.log(str);
*/


/*
const str = "java script";
const name = "      H    arsh        ";
const test = "Hello World Hello";

console.log(str.slice(-6)); // script
console.log(str.substring(-6)); // javascript
console.log(str.substr(0,4)); // java
console.log(str.startsWith("java")) // true
console.log(str.endsWith("script")) // true
console.log(str.includes("script")) // true
console.log(name.trim()); // H     arsh
console.log(name.trimStart()) // H    arsh
console.log(name.trimEnd()) //        H     arsh      


console.log(test.indexOf("Hello")) // 0
console.log(test.lastIndexOf("Hello")) // 12

console.log(test.replace("Hello","Bye")) // Bye World Hello
console.log(test.replaceAll("Hello","Bye")) // Bye World Bye

console.log(test.split(" ")); // [ 'Hello', 'World', 'Hello' ]

const arr = ["apple", "banana", "mango"];

console.log(arr.join(", ")); // apple, banana , mango

console.log(str.repeat(3)); // java scriptjava scriptjava script

*/

// const str = "Harsh abc";
// const arr = ["Java","Script"]
// const mp = [10,20,40,60];
// const users = [
//     {id:1,name:"Harsh"},
//     {id:2,name:"Anku"},
//     {id:3,name:"Suvransu"},
// ]

// console.log(str.slice(0,1)); 
// console.log(arr.splice(1,2));
// console.log(mp.find((num)=> num > 100));

// console.log(users.find((u)=>u.id===2));

// const strs = "aharsh3039@gmail.com";
// console.log(strs.slice(strs.indexOf(".")));



// const arr = [10,20,30,40,50,60];

// // console.log(arr.map((num)=>num*2));
// // console.log(arr.map((num)=>num>2)); 

// let a = [1,2,3];
// let b = a;
// b.push(20);
// console.log(a) // 1,2,3,20
// console.log(b) // 1,2,3,20

// const arr = [{k:12},{a:123},{b:9}];

// for(let char of arr){
//     console.log(Object.keys(char)[0]);
// }


// let arr1 = [10,20,30,40,5,2];


// let abc = arr1.toSorted((a,b)=>a-b);
// console.log(abc);
// console.log(arr1);

// arr1.sort((a,b)=>a-b);
// console.log(arr1);


// const arr = [10,"harsh",'C'];
// const number = [];
// const string = [];
// const char = [];

// arr.map((element)=>{
//     if(typeof element === "number") number.push(element);
//     else if( typeof element === "string"){
//         if(element.length === 1) char.push(element);
//         else string.push(element);
//     }
// })

// console.log(number);
// console.log(string);
// console.log(char);



// console.log(arr.reduce((acc,curr)=>acc+curr));

// polyfill for map 
Array.prototype.myMap = function(callback){
    let temp = [];
    for(let i=0;i<this.length;i++){
        temp.push(callback(this[i],i,this));
        
    }
    return temp;
}

// Polyfill for filter 

Array.prototype.myFilter = function(cb){
    let result = [];
    for(let i=0;i<this.length;i++){
        if(cb(this[i],i,this)){
            result.push(this[i]);
        }
    }
    return result;
};

// Polyfill for reduce

Array.prototype.myReduce = function(callback, initialValue) {
    let accumulator = initialValue;

    for (let i = 0; i < this.length; i++) {
        accumulator = callback(accumulator, this[i], i, this);
    }

    return accumulator;
};

const arr = [1,2,3,4,5];

// console.log(arr.myMap((num)=>num*3));
// console.log(arr.myFilter((num)=>num>3));
// console.log(arr.myReduce((acc,cur)=>acc+cur,0));



let students = [
    {name:"Piyush",rollNumber:31,marks:30},
    {name:"Harsh",rollNumber:31,marks:90},
    {name:"Anku",rollNumber:31,marks:40},
    {name:"sumire",rollNumber:31,marks:32},
];

let names = [];

students.map((stduent)=>{
    names.push(stduent.name);
})


console.log(students.map((obj)=>Object.keys(obj)));
console.log(students.filter((student)=>student.marks>33));
console.log(students.reduce((acc,curr)=>acc+curr.marks,0))
console.log(students.filter((student)=>{
    if(student.marks>33) return student.name;
}));