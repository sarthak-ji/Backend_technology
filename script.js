// alert("heyyy!");

// Fundamentals of JavaScript!
// Arrays & Objects (forEach, map, filter, find, indexOf)
// Functions return
// Async JS coding..

// In JS, an array can contain any kind of element including nums, chars, strings, objects, functions,,,anything.
// let arr = [1,5,3,7];

// forEach (same arr me changes ke liye use karte hain, no newArr is created)
// arr.forEach(function(val){
//     console.log("Hello " + (val+2));
// })

// map (aapke diye hue array se aap ek aur newArr create krna chahte ho jab)
// let newArr = arr.map(function(val){
//     return val*2; // jo kuch bhi return me likhoge wo aapke newArr me likh jayga 
// })
// console.log(newArr);

// filter (aapke diye hue array se aap ek aur newArr create krna chahte ho, similar to map jab filter karna ho)
// let newArr = arr.filter(function(val){
//     if(val > 3) {return true;} // jo kuch bhi return me likhoge wo aapke newArr me likh jayga 
//     else return false; // automatically this else will be considered as false.
// })
// console.log(newArr);

// find ()
// let ans = arr.find(function(val){
//     if(val === 3) return val;
// })
// console.log(ans);

// indexOf (tell the index value of an element) --> "arr.indexOf(5)"

// ```````````````````````````.............................```````````````````````````.........................

// NPM Understanding:
// npm - (node package manager: A place contains various packages)
// (node js core mein jo kuch bhi preinstalled aata hai --> Module!)
// (npm se jo hum download krte hain woh --> Package!)

// Installing and Uninstalling anything from basics & advanced:
// install - (npm install package_name)
// uninstall - (npm uninstall package_name)

// Understanding node modules

// Dependencies: (batati hain ki humari application ke ander kya kya cheeze contained hain...)

// devDependencies: (Ayse packages jo sirf development mein kaam aayein aur jab app deploy ho jaye tab hum unn packages ko use nahi kar rhe honge)

// scripts - Understanding default scripts PATH and custom scripts



// Cat-Me...
// const CatMe = require("cat-me") // ye line cat-me package me jo bhi code likha hua hai already usko script.js me lane ka kaam krti hai
// console.log(CatMe());



// Server creation...
// const http = require('http');

// const server = http.createServer(function(req, res){
//     res.end("Hello world");
// })

// server.listen(3000); // Server is ready now --> "localhost:3000"



// Routing...
const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url == "/about"){
        res.end("The About Page!");
    }

    if (req.url == "/profile"){
        res.end("The Profile Page!");
    }

    if (req.url == "/"){
        res.end("The home page!")
    }
})

server.listen(3050);  