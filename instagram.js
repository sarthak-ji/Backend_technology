const express = require('express');
const app = express();
// const path = require('path');

app.set("view engine", 'ejs');
// app.set("views", path.join(__dirname, '/views'));

app.get("/ig/:username", (req, res) => {
    let {username} = req.params;
    res.render("Instagram.ejs", {username});
});

app.listen(5000, (req, res) => {
    console.log("Server is running..")
});