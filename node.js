// const fs = require('fs');

// Bare minimum stuff: 
// writefile
// const fs = require('fs');
// fs.writeFile("hey.txt", "hey hello kaise ho mitrr??", function(err){
//     if(err) console.error(err);
//     else console.log("done");
// })

// On terminal: (node script.js)      

// appendfile
// const fs = require('fs');
// fs.appendFile("hey.txt", " mai toh acha hoon dost!", function(err){
//     if(err) console.error(err);
//     else console.log("done");
// })

// rename
// const fs = require('fs');
// fs.rename("hey.txt", "hello.txt", function(err){ 
//     if(err) console.error(err);
//     else console.log("done");
// })

// copyfile
// const fs = require('fs');
// fs.copyFile("hello.txt", "./copy/copy.txt", function(err){
//     if(err) console.error(err); // console.log(err.message) --> err kya hai wo batane ke liye! 
//     else console.log("done");
// })

// unlink (Usage: Existing file ko delete/remove karne ke liye..)
// const fs = require('fs');
// fs.unlink("./copy/copy.txt", function(err){
//     if(err) console.error(err);
//     else console.log("Removed")
// })

//.....................................................................................................................


// Internet pe kuch bhi karne ke liye rules banaye gaye hain, unke dwara jinhone internet banaya hai, ab unn rules ko follow karna jaruri hai, aur ye rules follow ho isiliye ye rules aap ke Operating System ke software me pre-installed aate hain

// http Protocol: Yahi wo rule hai jisko follow kare bina aap internet pe naa hi kuch bhej sakte ho, aur na hi kuch mangwa sakte ho.

// const http = require('http');

// const server = http.createServer(function(req, res){
//     res.end("Hello world");
// })

// server.listen(3000); // Server is ready now --> "localhost:3000"
