


// // // // // const promise = new Promise((resolve,reject)=>{
// // // // //   const success = true;
// // // // //   if(success) resolve("successful");
// // // // //   else reject("failed");
// // // // // })
// // // // // promise
// // // // // .then((res)=>console.log(res))



// // // // // const user = {
// // // // //     name: "Harsh",
// // // // //     greet: function (){
// // // // //         const arrow = () => {
// // // // //             console.log("hello " + this.name);
// // // // //         }
// // // // //         arrow();
// // // // //     }
// // // // // }

// // // // // user.greet();

// // // // //Shalow copy 
// // // // // const user1 = {
// // // // //     name: "harsh",
// // // // //     age: 20,
// // // // //     address: {
// // // // //         city: "Delhi"
// // // // //     }
// // // // // };

// // // // // const user2 = { ...user1 };

// // // // // user2.name = "anku";

// // // // // console.log(user2);


// // // // // Deep copy 

// // // // // const user1 = {
// // // // //     name:"test",
// // // // //     address:{
// // // // //         city:"test",
// // // // //     },
// // // // // };

// // // // // const user2 = structuredClone(user1);
// // // // // const deepCopt = JSON.parse(JSON.stringify(user1));

// // // // // user2.address.city = "Mumbai";

// // // // // console.log(user1.address.city);
// // // // // console.log(deepCopt.address.city);


// // // // // const arr = [1,2,3,4];

// // // // // const test = arr.map((a,b)=>a*b);
// // // // // console.log(test);

// // // // // const test1 = arr.filter((num)=>num%2===0);
// // // // // console.log(test1);

// // // // // const test2 = arr.reduce((curr,next)=>curr+next);
// // // // // console.log(test2);


// // // // // var a = 3;
// // // // // console.log(a);


// // // // // const parent = document.querySelector(".container");

// // // // // parent.addEventListener("click",(event)=>{
// // // // //     if(event.target.tagName === "BUTTON"){
// // // // //         console.log("Botton Clicked");
// // // // //     }
// // // // // })



// // // // //Debouncing 

// // // // // runs function after specific time ;

// // // // // function debounce(fn, delay){
// // // // //     let timer;
// // // // //     return function(...args){
// // // // //         clearTimeout(timer);

// // // // //         timer = setTimeout(()=>{
// // // // //             fn.apply(this,args);
// // // // //         },delay);
// // // // //     };
// // // // // }

// // // // // function search(query){
// // // // //     console.log("Searching:",query);
// // // // // }

// // // // // const debounceSearch = debounce(search,500);

// // // // // input.addEventListener("input",(e)=>{
// // // // //     debounceSearch(e.target.value);
// // // // // });


// // // // // debounceSearch("H");
// // // // // debounceSearch("Ha");
// // // // // debounceSearch("Har");
// // // // // debounceSearch("Hars");
// // // // // debounceSearch("Harsh");


// // // // // Throttling

// // // // // runs function only ones in specific time ;

// // // // // function throttle(fn,delay){
// // // // //     let lastCall = 0;
// // // // //     return function(...args){
// // // // //         const now = Date.now();

// // // // //         if(now - lastCall >= delay){
// // // // //             lastCall = now;
// // // // //             fn.apply(this,args);
// // // // //         }
// // // // //     };
// // // // // }

// // // // // function handelScroll(){
// // // // //     console.log("Scroll event");
// // // // // }

// // // // // const throttledScroll = throttle(handelScroll,1000);

// // // // // window.addEventListener("scroll",throttledScroll);




// // // // // callback function 
// // // // // function abc(fn){
// // // // //     fn();
// // // // // }

// // // // // function fn(){
// // // // //     console.log("hello");
// // // // // }

// // // // // abc(fn);


// // // // // const arr = [1,2,3,4,5,6,6,];

// // // // // // const uniqArr = [...new Set(arr)];

// // // // // const uniqArr = arr.filter((item,index)=>{
// // // // //     return arr.indexOf(item) === index;
// // // // // })
// // // // // console.log(uniqArr);


// // // // // Valid Parenthesis

// // // // // const isValid = (s)=>{
// // // // //     const stack = [];
// // // // //     const map = {
// // // // //          ')':'(',
// // // // //          '}':'{',
// // // // //          ']':'[',
// // // // //     };

// // // // //     for(let char of s){
// // // // //         if(char==='(' || char==='{' || char === '['){
// // // // //             stack.push(char);
// // // // //         }else{
// // // // //             const top = stack.pop();

// // // // //             if(top !== map[char]) return false;
// // // // //         }
// // // // //     }
// // // // //     return stack.length === 0;
// // // // // }

// // // // // console.log(isValid("()"));
// // // // // console.log(isValid(")("));


// // // // //polyfill
// // // // /*
// // // // Array.prototype.myForEach = function(callback){
// // // //     for(let i=0;i<this.length;i++){
// // // //         callback(this[i],i,this);
// // // //     }
// // // // }

// // // // const arr = [1,2,3,4];

// // // // arr.myForEach((item)=>{
// // // //     console.log(item);
// // // // })
// // // // */

// // // // // let a = 10;
// // // // // let b = 20;
// // // // // [a,b] = [b,a];
// // // // // console.log(a,b);

// // // // // let arr = [1,2,3,4,5,6];
// // // // // let copy = arr[0];

// // // // // for(let i=0;i<arr.length;i++){
// // // // //     arr[i] = arr[i+1];
// // // // // }
// // // // // arr[arr.length-1] = copy;

// // // // // console.log(arr);

// // // // // Debouncing 

// // // // /*
// // // // function debounce(fn,delay){
// // // //     let timer;
// // // //     return function(...args){
// // // //         clearTimeout(timer);
// // // //         timer = setTimeout(()=>{
// // // //             fn.apply(this,args);
// // // //         },delay)
// // // //     }
// // // // }

// // // // function search(query){
// // // //     console.log("Searching:",query)
// // // // }

// // // // const debouncedSearch = debounce(search, 1000);


// // // // debouncedSearch("h")
// // // // debouncedSearch("ha")
// // // // debouncedSearch("har")
// // // // debouncedSearch("hars")
// // // // debouncedSearch("harsh")

// // // // */


// // // // /*
// // // // function flatten(arr){
// // // //     let result = [];

// // // //     for(let item of arr){
// // // //         if(Array.isArray(item)){
// // // //             result = result.concat(flatten(item));
// // // //         }else{
// // // //             result.push(item);
// // // //         }
// // // //     }
// // // //     return result;
// // // // };

// // // // console.log(flatten([1,2,3,4,[1,2,3,[5,6,7,8]]]));

// // // // */

// // // // // && return first falsy value if first value is truthy so it return second value
// // // // /*
// // // // console.log(true && 0);  // 0
// // // // console.log(false && 0); // false
// // // // console.log("a" && "b"); // b
// // // // */

// // // // //return first truthy value 
// // // // /*
// // // // console.log(0 || "ok"); // ok
// // // // console.log("first" || "x");  // first
// // // // */


// // // // // console.log(null == undefined) //ture
// // // // // console.log(null === undefined) // false
// // // // // console.log(undefined === undefined) // true
// // // // // console.log(null == null) // true
// // // // // console.log(null === null) // true
// // // // // console.log(Number(null)) // 0
// // // // // console.log(Number(undefined)) // NaN
// // // // // console.log(11 - "sh") // NaN
// // // // // console.log("1" - "2") // -1
// // // // // console.log("a" + 1) // a1


// // // // // console.log(null > 0) // false
// // // // // console.log(null >= 0) // true
// // // // // console.log(null === 0) // false
// // // // // console.log(null == 0) // false

// // // // // console.log(0 || 5) // 5
// // // // // console.log(0 ?? 5) // 0
// // // // // console.log(null ?? 5) // 5

// // // // // console.log(null + 1) // 1
// // // // // console.log(false + 1) // 1
// // // // // console.log(true + 1) // 2
// // // // // console.log(undefined + 1) // NaN

// // // // // console.log(10 + "hye" + 10) // 10hye10
// // // // // console.log({}+{}) // [object Object][object Object]
// // // // // console.log([] + [3,53]) // 3,53
// // // // // console.log([] + []) // 
// // // // // console.log(true === true) // true
// // // // // console.log(0.1+0.3 == 0.4) // true
// // // // // console.log(0.1+0.3 === 0.4) // true
// // // // // console.log(false == []) // true
// // // // // console.log(false === []) // false

// // // // // console.log(false ==! []) // true
// // // // // console.log(false == "") // true
// // // // // console.log(false === "") // false

// // // // // console.log(false == null)  // false
// // // // // console.log(false == undefined) // false
// // // // // console.log(false ==! []) // true
// // // // // console.log([] == []) // false
// // // // // console.log({} == {}) // false
// // // // // console.log([] == "") // true
// // // // // console.log([] == 0) // true
// // // // // console.log([""] == 0) // true
// // // // // console.log([1] == 1) // true
// // // // // console.log([1] === 1) // true

// // // // // How do you create a string in JavaScript? (using quotes and String () constructor)
// // // // /*
// // // // const name = "Harsh";
// // // // const world = 'world'
// // // // console.log("Hello " + name + world);

// // // // const age = 22;
// // // // console.log(`My age is ${age}`);


// // // // const str = new String("Hello");
// // // // console.log(str);
// // // // */


// // // // /*
// // // // const str = "java script";
// // // // const name = "      H    arsh        ";
// // // // const test = "Hello World Hello";

// // // // console.log(str.slice(-6)); // script
// // // // console.log(str.substring(-6)); // javascript
// // // // console.log(str.substr(0,4)); // java
// // // // console.log(str.startsWith("java")) // true
// // // // console.log(str.endsWith("script")) // true
// // // // console.log(str.includes("script")) // true
// // // // console.log(name.trim()); // H     arsh
// // // // console.log(name.trimStart()) // H    arsh
// // // // console.log(name.trimEnd()) //        H     arsh      


// // // // console.log(test.indexOf("Hello")) // 0
// // // // console.log(test.lastIndexOf("Hello")) // 12

// // // // console.log(test.replace("Hello","Bye")) // Bye World Hello
// // // // console.log(test.replaceAll("Hello","Bye")) // Bye World Bye

// // // // console.log(test.split(" ")); // [ 'Hello', 'World', 'Hello' ]

// // // // const arr = ["apple", "banana", "mango"];

// // // // console.log(arr.join(", ")); // apple, banana , mango

// // // // console.log(str.repeat(3)); // java scriptjava scriptjava script

// // // // */

// // // // // const str = "Harsh abc";
// // // // // const arr = ["Java","Script"]
// // // // // const mp = [10,20,40,60];
// // // // // const users = [
// // // // //     {id:1,name:"Harsh"},
// // // // //     {id:2,name:"Anku"},
// // // // //     {id:3,name:"Suvransu"},
// // // // // ]

// // // // // console.log(str.slice(0,1)); 
// // // // // console.log(arr.splice(1,2));
// // // // // console.log(mp.find((num)=> num > 100));

// // // // // console.log(users.find((u)=>u.id===2));

// // // // // const strs = "aharsh3039@gmail.com";
// // // // // console.log(strs.slice(strs.indexOf(".")));



// // // // // const arr = [10,20,30,40,50,60];

// // // // // // console.log(arr.map((num)=>num*2));
// // // // // // console.log(arr.map((num)=>num>2)); 

// // // // // let a = [1,2,3];
// // // // // let b = a;
// // // // // b.push(20);
// // // // // console.log(a) // 1,2,3,20
// // // // // console.log(b) // 1,2,3,20

// // // // // const arr = [{k:12},{a:123},{b:9}];

// // // // // for(let char of arr){
// // // // //     console.log(Object.keys(char)[0]);
// // // // // }


// // // // // let arr1 = [10,20,30,40,5,2];


// // // // // let abc = arr1.toSorted((a,b)=>a-b);
// // // // // console.log(abc);
// // // // // console.log(arr1);

// // // // // arr1.sort((a,b)=>a-b);
// // // // // console.log(arr1);


// // // // // const arr = [10,"harsh",'C'];
// // // // // const number = [];
// // // // // const string = [];
// // // // // const char = [];

// // // // // arr.map((element)=>{
// // // // //     if(typeof element === "number") number.push(element);
// // // // //     else if( typeof element === "string"){
// // // // //         if(element.length === 1) char.push(element);
// // // // //         else string.push(element);
// // // // //     }
// // // // // })

// // // // // console.log(number);
// // // // // console.log(string);
// // // // // console.log(char);



// // // // // console.log(arr.reduce((acc,curr)=>acc+curr));

// // // // // polyfill for map 
// // // // Array.prototype.myMap = function (callback) {
// // // //     let temp = [];
// // // //     for (let i = 0; i < this.length; i++) {
// // // //         temp.push(callback(this[i], i, this));

// // // //     }
// // // //     return temp;
// // // // }

// // // // // Polyfill for filter 

// // // // Array.prototype.myFilter = function (cb) {
// // // //     let result = [];
// // // //     for (let i = 0; i < this.length; i++) {
// // // //         if (cb(this[i], i, this)) {
// // // //             result.push(this[i]);
// // // //         }
// // // //     }
// // // //     return result;
// // // // };

// // // // // Polyfill for reduce

// // // // Array.prototype.myReduce = function (callback, initialValue) {
// // // //     let accumulator = initialValue;

// // // //     for (let i = 0; i < this.length; i++) {
// // // //         accumulator = callback(accumulator, this[i], i, this);
// // // //     }

// // // //     return accumulator;
// // // // };

// // // // const arr = [1, 2, 3, 4, 5];

// // // // // console.log(arr.myMap((num)=>num*3));
// // // // // console.log(arr.myFilter((num)=>num>3));
// // // // // console.log(arr.myReduce((acc,cur)=>acc+cur,0));



// // // // let students = [
// // // //     { name: "Piyush", rollNumber: 31, marks: 30 },
// // // //     { name: "Harsh", rollNumber: 31, marks: 90 },
// // // //     { name: "Anku", rollNumber: 31, marks: 40 },
// // // //     { name: "sumire", rollNumber: 31, marks: 32 },
// // // // ];

// // // // let names = [];

// // // // students.map((stduent) => {
// // // //     names.push(stduent.name);
// // // // })


// // // // // console.log(students.map((obj)=>Object.keys(obj)));
// // // // // console.log(students.filter((student)=>student.marks>33));
// // // // // console.log(students.reduce((acc,curr)=>acc+curr.marks,0))
// // // // // console.log(students.filter((student)=>{
// // // // //     if(student.marks>33) return student.name;
// // // // // }));


// // // // /*
// // // // 1. How do you convert other data types to string? (String(),
// // // // .toString())
// // // // 2. What happens when you compare strings using == and
// // // // ===?
// // // // 3. How are strings compared in JavaScript (lexicographically)?
// // // // 4. How do you convert a string to a number (parseInt(),
// // // // Number(), parseFloat())?
// // // // 5. How do you check if a value is a string (typeof or
// // // // instanceof)?
// // // // */

// // // // // const a = true;
// // // // // console.log(String(123)); // 123
// // // // // console.log(a.toString()); // true
// // // // // console.log("abc" < "abcd") // true 
// // // // // console.log("abc" > "abcd")  // false
// // // // // console.log((parseInt("123px"))) // 123


// // // // // Reverse a string without using built-in reverse().
// // // // function reverseString(str) {
// // // //     let reversed = "";

// // // //     for (let i = str.length - 1; i >= 0; i--)
// // // //         reversed += str[i];

// // // //     return reversed;
// // // // };

// // // // // console.log(reverseString("harsh"));


// // // // // Check if a string is a palindrome.

// // // // function isPalindrome(str) {
// // // //     const reversed = str.split("").reverse().join("");

// // // //     if (str === reversed) return true;
// // // //     return false;
// // // // }

// // // // // console.log(isPalindrome("madam"));
// // // // // console.log(isPalindrome("harsh"));


// // // // // Count the number of vowels and consonants in a string.

// // // // function countVowelsConsonants(str) {
// // // //     let vowels = 0;
// // // //     let consonants = 0;
// // // //     const vowel = "aeiouAEIOU";

// // // //     for (let char of str) {
// // // //         if (vowel.includes(char)) vowels++;
// // // //         else consonants++;
// // // //     }
// // // //     return {
// // // //         vowels,
// // // //         consonants,
// // // //     };

// // // // }

// // // // // console.log(countVowelsConsonants("Harsh"));


// // // // // Find the first non-repeated character in a string

// // // // function nonRepeatedCharacter(str) {
// // // //     const freq = {};

// // // //     for (let char of str) {
// // // //         freq[char] = (freq[char] || 0) + 1;
// // // //     }

// // // //     for (let char of str) {
// // // //         if (freq[char] === 1) return char;
// // // //     }

// // // //     return null;
// // // // }

// // // // // console.log(nonRepeatedCharacter('abcab'))



// // // // function isValidParenthisis(str) {
// // // //     const stack = [];
// // // //     const map = {
// // // //         ')': '(',
// // // //         '}': '{',
// // // //         ']': '[',
// // // //     };

// // // //     for (let char of str) {
// // // //         if (char === '(' || char === '{' || char === '[') stack.push(char);
// // // //         else {
// // // //             const top = stack.pop();

// // // //             if (top != map[char]) return false;
// // // //         }
// // // //     }
// // // //     return stack.length === 0;
// // // // }

// // // // // console.log(isValidParenthisis("{}"));



// // // // // IIFE 

// // // // // (function (x){
// // // // //     return (function (y){
// // // // //         console.log(x);
// // // // //     })(2);
// // // // // })(1);

// // // // function greetings(name) {
// // // //     console.log("hello " + name);
// // // // }

// // // // function processUserInout(callback) {
// // // //     let name = "test";
// // // //     callback(name);
// // // // }

// // // // // processUserInout(greetings);


// // // // //  Difference between Arrow function and regular function 

// // // // // 1 - synatx 

// // // // function greet() {
// // // //     console.log("hello");
// // // // }

// // // // const greets = () => {
// // // //     console.log("hello");
// // // // }


// // // // // 2 - argumesnts 

// // // // function greeting() {
// // // //     console.log("greeting from " + name);
// // // // }

// // // // const greetingss = () => {
// // // //     console.log("greeting from " + name);
// // // // }

// // // // // 3 - this keyword 

// // // // const user = {
// // // //     name: "test",
// // // //     greet: function () {
// // // //         console.log("user name is " + this.name);
// // // //     },
// // // //     test: () => {
// // // //         console.log("user name is " + this.name);
// // // //     }
// // // // }


// // // // // user.greet();
// // // // // user.test();


// // // // function sum(a) {
// // // //     return function (b) {
// // // //         return function (c) {
// // // //             return function (d) {
// // // //                 return a + b + c + d;
// // // //             }
// // // //         }
// // // //     }
// // // // }
// // // // // console.log(sum(1)(2)(3)(4));


// // // // function find() {
// // // //     let a = [];

// // // //     for (let i = 0; i < 10000000; i++)
// // // //         a[i] = i * i;

// // // //     return function (index) {
// // // //         console.log(a[index]);
// // // //     }
// // // // }

// // // // const closure = find();

// // // // // console.time("6000");
// // // // // closure(6000);
// // // // // console.timeEnd("6000");


// // // // function a() {
// // // //     for (var i = 0; i < 3; i++) {
// // // //         (function (j) {
// // // //             setTimeout(function () {
// // // //                 console.log(j);
// // // //             }, j * 1000);
// // // //         })(i);
// // // //     }
// // // // };

// // // // // a();


// // // // const arr1 = [];

// // // // function maxProfit(arr) {
// // // //     let minPrice = arr[0];
// // // //     let maxProfit = 0;
// // // //     let minDay = 0;
// // // //     let buyDay = 0;
// // // //     let sellDay = 0;

// // // //     for (let i = 0; i < arr.length; i++) {

// // // //         // update minimum price and its day
// // // //         if (arr[i] < minPrice) {
// // // //             minPrice = arr[i];
// // // //             minDay = i;
// // // //         }

// // // //         // calculate current profit
// // // //         let profit = arr[i] - minPrice;

// // // //         // update best profit and days
// // // //         if (profit > maxProfit) {
// // // //             maxProfit = profit;
// // // //             buyDay = minDay;
// // // //             sellDay = i;
// // // //         }
// // // //     }
// // // //     return {
// // // //         maxProfit,
// // // //         buyDay,
// // // //         sellDay,
// // // //     }
// // // // }


// // // // //  console.log(maxProfit(arr1));


// // // // // chunks
// // // // import _ from "lodash";

// // // // const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// // // // const result = _.chunk(arr2, 3);

// // // // // console.log(result);

// // // // function chunk(arr2, size) {
// // // //     const result = [];

// // // //     for (let i = 0; i < arr2.length; i += size) {
// // // //         result.push(arr2.slice(i, i + size));
// // // //     }
// // // //     return result;
// // // // }

// // // // // console.log(chunk(arr2,2));





// // // // function f(a) {
// // // //     return function (b) {
// // // //         return function (c) {
// // // //             return a + b + c
// // // //         }
// // // //     }
// // // // }

// // // // const sums = f(2);

// // // // // console.log(sums(4)(2));


// // // // function calculator(operator) {
// // // //     return function (a) {
// // // //         return function (b) {
// // // //             if (operator === "+") return a + b;
// // // //             else if (operator === "-") return a - b;
// // // //             else if (operator === "*") return a * b;
// // // //             else if (operator === "/") return a / b;
// // // //         }
// // // //     }
// // // // }

// // // // // console.log(calculator("+")(10)(20));
// // // // // console.log(calculator("-")(10)(20));
// // // // // console.log(calculator("*")(10)(20));
// // // // // console.log(calculator("/")(10)(20));



// // // // // infanite currying 
// // // // function add(a) {
// // // //     return function (b) {
// // // //         if (b) return add(a + b);
// // // //         return a;
// // // //     }
// // // // }

// // // // // console.log(add(10)(20)(2)());


// // // // function order(restaurant) {
// // // //     return function (size) {
// // // //         return function (type) {
// // // //             return `order placed: ${size} ${type} pizza from ${restaurant}`;
// // // //         };
// // // //     };
// // // // }

// // // // // console.log(order("Dominos")("Large")("Cheese Burst"));

// // // // function calculatePrice(tax) {
// // // //     return function (discount) {
// // // //         return function (price) {
// // // //             return price + tax - discount;
// // // //         }
// // // //     }
// // // // }

// // // // const itemPrice = calculatePrice(50)(20);

// // // // // console.log(itemPrice(2000));


// // // // function findMissing(arr) {
// // // //     let n = arr.length + 1;
// // // //     let sum = n * (n + 1) / 2;

// // // //     let actualSum = arr.reduce((acc, curr) => acc + curr, 0);

// // // //     return sum - actualSum;
// // // // }

// // // // // console.log(arr[0,1,2,3]);


// // // // function twoSum(nums, target) {
// // // //     const map = new Map();

// // // //     for (let i = 0; i < nums.length; i++) {
// // // //         let complement = target - nums[i];
// // // //         if (map.has(complement)) {
// // // //             return [map.get(complement), i];
// // // //         }
// // // //         map.set(nums[i], i);
// // // //     }
// // // //     return [];
// // // // }


// // // // // console.log(twoSum([1,2,3,4,5],9));





// // // // // debounce using prebuilt function 

// // // // const log = _.debounce((args) => {
// // // //     console.log(args)
// // // // }, 1000);

// // // // // log("h");
// // // // // log("he");
// // // // // log("hel");
// // // // // log("hell");
// // // // // log("hello");



// // // // function debounce(fn, t) {
// // // //     let timer;
// // // //     return function (...args) {
// // // //         clearTimeout(timer);
// // // //         timer = setTimeout(() => {
// // // //             fn.apply(this, args);
// // // //         }, t);
// // // //     };
// // // // }

// // // // const logs = debounce((text) => {
// // // //     console.log(text);
// // // // }, 1000);

// // // // // logs("h")
// // // // // logs("he")
// // // // // logs("hel")
// // // // // logs("hello")
// // // // // logs("hello W")
// // // // // logs("hello Wo")
// // // // // logs("hello Worl")
// // // // // logs("hello World")

// // // // const login = _.throttle((msg) => {
// // // //     console.log(msg);
// // // // }, 1000, {
// // // //     trailing: false
// // // // });

// // // // // login("he");
// // // // // login("hell");
// // // // // login("hello");


// // // // let arr3 = [1, 2, [3, 4, [5, 6, [7, 8]]], 10, 11, 12];

// // // // // console.log(arr3.flat(Infinity))



// // // // // (function(){
// // // // //     const user = {
// // // // //         name:"Harsh",
// // // // //         age:20,
// // // // //         "test":true,
// // // // //     };

// // // // //     delete user.name;
// // // // //     console.log(user);
// // // // // })();



// // // // const property = "fullName";
// // // // const name = "Harsh Koundal";

// // // // const user1 = {
// // // //     age: 30,
// // // //     [property]: name,
// // // //     age: 20,
// // // // };

// // // // // console.log(user1);

// // // // // console.log(Object.keys(user1)[0]);

// // // // // for(let key in user1){
// // // // //     console.log(user1[key]);
// // // // // }


// // // // const users = [
// // // //     {
// // // //         name: "Ankit",
// // // //         age: 20,
// // // //         isStudent: true,
// // // //         skills: ["JS", "React"],
// // // //         address: {
// // // //             city:"Delhi"
// // // //         }
// // // //     },
// // // //     {
// // // //         name: "Ankit",
// // // //         age: 20,
// // // //         isStudent: true,
// // // //         skills: ["JS", "React"],
// // // //         address: null
// // // //     },
// // // //     {
// // // //         name: "Ankit",
// // // //         age: 20,
// // // //         isStudent: true,
// // // //         skills: ["JS", "React"],
// // // //         address: null
// // // //     },
// // // //     {
// // // //         name: "Ankit",
// // // //         age: 20,
// // // //         isStudent: true,
// // // //         skills: ["JS", "React"],
// // // //         address: null
// // // //     },
// // // // ];


// // // // // console.log(typeof users)

// // // // // const test = JSON.stringify(users)
// // // // // console.log(test);
// // // // // console.log(typeof test)

// // // // // const testing = JSON.parse(test);
// // // // // console.log(testing)

// // // // // const abcdef = '"hello"';
// // // // // console.log(JSON.parse(abcdef)); 



// // // // const xyz = {name:"anku",age:20};
// // // // const admin = {admin:true,...xyz};

// // // // // console.log(admin);


// // // // const shape = {
// // // //     radius : 10,
// // // //     diameter(){
// // // //         return this.radius*2;
// // // //     },
// // // //     perimeter:()=>2*Math.PI*this.radius,
// // // // };

// // // // // console.log(shape.diameter());
// // // // // console.log(shape.perimeter());


// // // // let c = {greeting:"Hey"};
// // // // let d;

// // // // d=c;
// // // // d.greeting = "he;;";
// // // // // console.log(c.greeting)


// // // // // console.log([]==[]);
// // // // // console.log([]===[]);
// // // // // console.log({}=={});
// // // // // console.log({}==={});


// // // // // const copy = {...users[0]};
// // // // // copy.name="harsh";
// // // // // copy.address.city="hp";
// // // // // console.log(copy);
// // // // // console.log(users[0]);


// // // // let user = {
// // // //     name: "Harsh",
// // // //     greet(city, country) {
// // // //         const name = "anku";
// // // //         console.log(`My name is ${this.name} from ${city}, ${country} `);
// // // //     },
// // // // };

// // // // const fn = user.greet.bind(user, "Himachal Pradesh", "India");
// // // // // fn();
// // // // // user.greet.call(user,"Himachal Pradesh","India");
// // // // // user.greet.apply(user,["Himachal Pradesh","India"]);

// // // // const arr = [1, 2, 3, 4];
// // // // const arr1 = [1, 2, 3, 4, "hello"];

// // // // // console.log(arr.concat(arr1));


// // // // // console.log(Math.max.apply(null,arr))


// // // // function greet(name, cb) {
// // // //     console.log("hello " + name);
// // // //     cb();
// // // // }

// // // // function sayBye() {
// // // //     console.log("good bye");
// // // // }

// // // // greet("Ankit", sayBye);

// // // // setTimeout(() => {
// // // //     console.log("Step 1");
// // // //     setTimeout(() => {
// // // //         console.log("Step 2");
// // // //         setTimeout(() => {
// // // //             console.log("Step 3");
// // // //         }, 1000)
// // // //     }, 1000)
// // // // }, 1000)





// // // console.log("start");

// // // let state = true;
// // // const promise = new Promise((resolve,reject)=>{
// // //     if(state){
// // //         resolve("successfull");
// // //         state = false;
// // //     } 
// // //     else{
// // //         reject("failed");
// // //         state = true;
// // //     }
// // // })

// // // promise
// // // .then((res)=>console.log(res))
// // // .catch((rej)=>console.log(rej));

// // // console.log("Fineshed")


// // // function test1(test){
// // //     return new Promise((resolve,reject)=>{
// // //         resolve("hello" + test);
// // //     })
// // // }

// // // function test2(test){
// // //     return new Promise((resolve,reject)=>{
// // //         resolve("hello i am " + test);
// // //     })
// // // }

// // // function test3(test){
// // //     return new Promise((resolve,reject)=>{
// // //         resolve("hello" + test);
// // //     })
// // // }

// // // // Promise.all([
// // // //      test1("testing one"),
// // // //      test2("testing second"),
// // // //      test3("testing third")
// // // // ])
// // // // .then((res)=>console.log(res))
// // // // .catch((rej)=>console.log(rej));


// // // const testing =  async()=>{
// // //     const res1 = await test1("testing one");
// // //     const res2 = await test2("testing second");
// // //     const res3 = await test2("testing third");
// // //     console.log(res1);
// // //     console.log(res2);
// // //     console.log(res3);
// // // };

// // // // testing();




// // // console.log("start");
// // // const promise = new Promise((resolve,reject)=>{
// // //     console.log(1);
// // //     resolve(2);
// // // });

// // // promise.then((res)=>{
// // //     console.log(res);
// // // });

// // // console.log("end");



// // // // Polyfill Map()
// // // const arr = [1,2,3,4];

// // // Array.prototype.myMap = function(cb){
// // //     let result = [];
// // //     for(let i=0;i<this.length;i++){
// // //         result.push(cb(this[i],i,this));
// // //     }
// // //     return result;
// // // }

// // // console.log(arr.myMap((num)=>num*2))



// // // // Debounce 
// // // function debounce(fn,delay){
// // //     let timer;
// // //     return function(...args){
// // //         clearTimeout(timer);
// // //         timer = setTimeout(()=>{
// // //             fn.apply(this,args);
// // //         },delay);
// // //     };
// // // }

// // // function search(text){
// // //     console.log("Searching:",text);
// // // }

// // // const debounceSearch = debounce(search,500)


// // // debounceSearch("t");
// // // debounceSearch("te");
// // // debounceSearch("tes");
// // // debounceSearch("test");



// // const log = _.debounce((msg)=>{
// //     console.log(msg);
// // },1000);

// // log("he")
// // log("hell")
// // log("hell0")


// // function throttle(fn,delay){
// //     let lastCall = 0;

// //     return function(...args){
// //         const now = Date.now();

// //         if(now-lastCall >= delay){
// //             lastCall = now;
// //             fn.apply(this,args);
// //         }
// //     };
// // }

// // const logs = throttle((msg) => {
// //     console.log(msg);
// // }, 1000);

// // logs("he");
// // logs("hell");
// // logs("hello");


// // const arr = [1,2,[3,4],5,[6,7,8,[9,10,11,12,13,[14,15,16]]],17];


// // function flatten(arr){
// //     let result = [];

// //     for(let item of arr){
// //         if(Array.isArray(item)){
// //             result = result.concat(flatten(item));
// //         }else{
// //             result.push(item);
// //         }
// //     }
// //     return result;
// // }

// // console.log(flatten(arr));



// // const user1 = {
// //     name: "Ankit",
// //     address: {
// //         city: "Delhi"
// //     }
// // };

// // const user2 = { ...user1 };

// // user2.address.city = "Mumbai";

// // console.log(user1.address.city); // Mumbai

// // console.log(user1.address === user2.address)

// // const copy = Object.assign({},user1);
// // console.log(copy)


// // const user3 = structuredClone(user1);
// // const user4 = JSON.parse(JSON.stringify(user1));
// // console.log(user4)


// // let str = "harsh Koundal";

// // console.log(str.split("").reverse().join(""));


// // const result = str
// // .split(" ")
// // .map(word=>word.charAt(0).toUpperCase() + word.slice(1))
// // .join(" ");

// // console.log(result);

// // const arr = [10,20,30,40,50];

// // // console.log(arr.slice(-7,-1))
// // // arr.splice(0,0,30,40)
// // arr.splice(0,1,100,200);
// // // console.log(arr)


// // impoe



// function memoizedSquare(){
//     const cache = {};

//     return function(n){
//         if(cache[n] !== undefined){
//             console.log("From cache");
//             return cache[n];
//         }

//         console.log("Calculating...");
//         const result = n*n;
//         cache[n] = result;

//         return result;
//     }
// }

// // const square = memoizedSquare();

// // console.log(square(5));
// // console.log(square(5));
// // console.log(square(10));
// // console.log(square(10));


// // const user = {name:"harsh",age:20};
// // const {name,age} = user

// // console.log(name)

// // for(let key in user){
// //     console.log(key,":",user[key]);
// // }


// function greet(name,cb){
//     console.log("name is " + name);
//     cb();
// }
// function sayBye(){
//     console.log("bye");
// }

// // greet("harsh",sayBye);

// const arr = [1,2,3,4,5,6,7,8,9];

// // console.log(arr.sort((a,b)=>b-a));


// // const tree = document.querySelector(".anku")
// // document.getElementById("tets");
// // document.getElementsByTagName("button");
// // document.querySelectorAll(".test");
  
// const user = null


// // console.log(user?.name);
// // console.log(user?.email);
// // console.log(user.email);


// let a = 10,b=0;
// try{
//     if(b===0){
//         throw new Error("cannot divide by zero");
//     }else{
//         console.log(a/b);
//     }
// }catch(err){
//     console.log("error",err);
// }


// console.log("1");
// Promise.resolve().then(()=>console.log("3"));
// setTimeout(()=>console.log("4"),1000);
// console.log("2");



function memoizedSquare(fn){
    let cache = {}; 
    return function(n){
        if(cache[n]!==undefined){

            console.log("From cache: "+cache[n]);
            return cache[n];
        }else {
            console.log("Calculating...");
            cache[n] = n*n;
            return cache[n];
        };
    }
}

const square  = memoizedSquare();
// console.log(square(5));
// console.log(square(5));


function debounce(fn,delay){
    let timer;
    return function(...args){
        clearTimeout(timer);
        timer = setTimeout(()=>{
            fn.apply(this,args);
        },delay);
    }
}

const search = debounce((msg)=>{
    console.log(msg);
},500)

// search("h");
// search("he");
// search("hell");
// search("hello");

function twoSum(nums,target){
    const map = {};

    for(let i=0;i<nums.length;i++){
        const complement = target-nums[i];

        if(map[complement] !== undefined){
            return [map[complement],i];
        }
        map[nums[i]] = i;
    }
    return {};
}

// console.log(twoSum([2,7,11,15],9))


// function maxProfit(prices){
//     let minPrice = prices[0];
//     let maxProfit = 0;
//     let buyDay = 0;
//     let sellDay = 0;

//     for(let i=0;i<prices.length;i++){
//         const profit = prices[i] - minPrice;
//         if(minPrice > prices[i]){
//            minPrice = prices[i];
//            buyDay = i; 
//         }
//         if(maxProfit < profit){
//             maxProfit = profit;
//             sellDay = i;
//         }
//     }

//     return {maxProfit,buyDay,sellDay};
// }

// // console.log(maxProfit([1,3,6,2,6,9]));


// function isValid(s){
//     const stack  = [];
//     const map = {
//         ')':'(',
//         '}':'{',
//         ']':'[',
//     };

//     for(let ch of s){
//         if(ch === '(' || ch === '{' || ch === '['){
//             stack.push(ch);
//         }else{
//             const top = stack.pop();

//             if(top !== map[ch]){
//                 return false;
//             }
//         }
//     }
//     return stack.length === 0;
// }

// // console.log(isValid("{}"))



// function removeDuplicates(nums){
//     if(nums.length===0) return 0;
//     const newNums = [nums[0]];

//     let i = 0;

//     for(let j=1;j<nums.length;j++){
//         if(nums[j] !== nums[i]){
//             i=j;
//             newNums.push(nums[i]);
//         }
//     }
//     return newNums;
// }

// console.log(removeDuplicates([1, 1, 2, 2, 3, 4, 4]));

// const arr = [1,1,2,2,4,5,7,5,4];
// const arr1 = [...new Set(arr)];

// console.log(arr1);

// console.log(typeof removeDuplicates)
// console.log(typeof null)
// console.log(typeof undefined)
// console.log(typeof NaN)

// console.log(0.1+0.2 === 0.3)


// function isPrime(n){
//     if(n<=1) return "Not Prime";
//     for(let i=2;i*i<=n;i++){
//         if(n%i==0) return "Not Prime";
//     }
//     return "prime";
// }

// console.log(isPrime(2));

function throttle(fn,delay){
    let lastCall = 0;

    return function(...args){
        const now = Date.now();

        if(now - lastCall >= delay){
            lastCall = now;
            fn.apply(this,args);
        }
    };
}

const test = throttle((msg)=>{
    console.log(msg);
},1000);

test("he");
test("hell");
test("hello");


function memoizedSquares(){
    const cache = {};

    return function(num){
        if(cache[num])
            return cache[num];

        console.log("Calculating...");
        cache[num] = num * num;
        return cache[num];
    }
}

const squares = memoizedSquares();

// console.log(squares(4));
// console.log(squares(4));
