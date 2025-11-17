// Express.js: (framework -> ek flow deta hai ki ye cheez aapko ayse karni hai, aur phir woh cheez apko waise hi karni padegi apne trike se jaise aap chahte ho like individuality aap khud ki likh sakte ho)

// Introduction to Express.js: (Ek npm package hai)
// (manages everything from Receiving the request and giving the Response)

// Express is like a toolbox which helps in server creation. (jab koi bhi request server pe jaati hai toh waha se lekr humare pass tak response aane tak ka kaam Express.js ka hai)

// Setting up a basic Express Application: 
// Routing:
const express = require("express");
const morgan = require("morgan"); 
const app = express(); // Express ki sari powers nikal kar app variable me aa jati hai
const path = require('path'); // Views directory...

app.set("views", path.join(__dirname, "/views")); // ye dono fix krdete hain ki views folder yhi se render kre!

// third-party middleware
app.use(morgan('dev'));  // tells us that kis route pe kab request aayi thi aur usne kitna time liya response bhejne ke liye!

// Built-in midwares... (setting up "Parsers"... ---> for form)
app.use(express.json());  // for making json data into readable form
app.use(express.urlencoded({extended: true}));  // for making encoded data into readable form

app.set("view engine", 'ejs'); // Create Views folder --> ejs file & install:(npm i ejs)


// Middleware :-
app.use(function(req, res, next){
    console.log("Middleware chala.");
    next();
});

app.use(function(req, res, next){
    console.log("Middleware ek aur baar chala!!");
    next();
});

// app.get(route, requestHandler)
app.get("/", function(req, res){
    res.send("champion mera anuj");   // used to send a response to the client.
});

app.get("/profile", (req, res) => {
    res.send("champion uska coach");
});


// rendering page... & (custom mid-ware --> for single route) 
app.get("/about",

    (req, res, next) => {
        const a = 5;
        const b = 10;
        console.log(a + b);

        next();

    }
    ,(req, res) => {
    res.render("index.ejs");
}) 


// app.get("/about", function(req, res){     // Request and Response handling: (Remember the three things as --> "Frontend-Backend-Frontnd")
//     res.send("about wala page");
// }); 

// Error handler (special route in Express.js)
app.get("/profile", (req, res, next) => {
    return next(new Error("something went wrong!"))  // .ejYe console pe print hoga/jayega
}); 

// Error handler (special route in Express.js) -> Middleware!
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')  // Ye frontend pe jayega -> yeh last me hi rkhte hain.
});

// // Insteaad of error 404, in case of non-specific route.... err!
// app.get("*", (req, res ) => {
//     res.send("Hey dude, this path doesn't exists!");
// });


app.listen(3000);  // "npm i nodemon -g" then, "nodemon Express.js"
// nodemon ki help se apko baar baar server nahi reload krna padega!

// Middleware: (jab )
// (Two ways of creation --> (1) is in the above routinig example and, the (2) learn from some other source..)

// Request and Response handling: (Remember the three things as --> "Frontend-Backend-Frontnd")

// Error Handling: (Express js ke pass ek special route hai specially for error handling --> "express js err handler")

// ```````````````````````````````````````````````````````````...........................................................

// Form Handling and working with the forms: (handling backend process of forms & making sure the data coming from any frontend lib/fw/templating engines, we still handle it at the Backend)

// cookie-parser package installation --> ("npm i cookie-parser")
// The cookie-parser package in Node.js is like a helper tool that reads the cookies sent by the browser and makes them easy for your server code to use.

// In simple words:
// When a user visits your website, their browser can send small bits of data called cookies(mainly used in Authentication).
// cookie-parser takes those cookies and turns them into a nice JavaScript object,
// so you can read them like req.cookies.name instead of dealing with messy raw data.

// Concept of session & cookie: (..attached with "/abcd")
// blob(..when data is in Binary form): (Used to store big files (images, videos, PDFs, etc.) in a database in binary form.)










// // ..........................................................................................`````````````````````````````````````````````````````````````````````````````````````````````


// // // Form Handling...
// const express = require('express')
// const morgan = require('morgan')
// const app = express()
// // MongoDB...(database!)
// const userModel = require('./models/user')
// const dbConnection = require('./config/db')

// app.set("view engine", 'ejs')
// app.use(morgan('dev'))

// // Built-in midwares...
// app.use(express.json());  // for making json data into readable form
// app.use(express.urlencoded({extended: true}));  // for making encoded data into readable form
// app.use(express.static('public')) // for connecting CSS file...

// // Rendering ejs page (for HTML...)
// app.get("/register", (req, res) => {
//     res.render('register')
// })

// // for MongoDB DATABASE...
// // CRUD Operations: "Create"
// app.post('/register', async(req, res) => {

//     const {username, email, password} = req.body

//     const newUser = await userModel.create({
//         username: username,
//         email: email,
//         password: password
//     })
//     res.send(newUser)
// })



// // CRUD Operations: "Read"
// // app.get('/get-users', (req, res) => {
// //     userModel.find().then((users) => {  
// //         res.send(users)
// //     }) // find() method is used to find all the users stored in a database
// // })


// // For specific Users: use find method with conditions...
// // app.get('/get-users', (req, res) => {
// //     userModel.find({username: 'Ishu'}).then((users) => {
// //         res.send(users)
// //     })
// // })


// // For only One specific User: use findOne method with conditions...
// // app.get('/get-user', (req, res) => {
// //     userModel.findOne({
// //         username: "Ishu"
// //     }).then((users) => {
// //         res.send(users)
// //     })
// // })



// // CRUD Operations: "Update"
// // app.get('/update-user', (req, res) => {
// //     userModel.findOneAndUpdate({
// //         username: 'Ishu'
// //     }, {
// //         email: "ishu01@gmail.com"
// //     }).then((users) => {
// //         res.send(users)
// //     })
// // })



// // CRUD Operations: "Delete"
// // app.get('/delete-user', (req, res) => {
// //     userModel.findOneAndDelete({
// //         email: "nmn@33gmail.com"
// //     }).then((users) => {
// //         res.send(users)
// //     })
// // })

// // CRUD Operations: "Delete" (using async-await)
// // app.get('/delete-user', async (req, res) => {
// //     const deleteUser = await userModel.findOneAndDelete({
// //         username: "Sarthak ji"
// //     })
// //         res.send(deleteUser)
// // })


// app.post("/register", (req, res) => {
//     console.log(req.body)
//     res.send("User registered successfully!")
// })


// // app.post('/get-form-data', (req, res) => { // "post" method is used to bring data from Frontend to Backend. And, "get" method is used to bring data from Backend to Frontend.
// //     console.log(req.body)
// //     res.send("Data received") 
// // })

// app.listen(4000)
