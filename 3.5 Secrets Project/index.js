//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";


const __dirname = dirname(fileURLToPath(import.meta.url));


//const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Commenting as this doesn't work with the code in place
// var secret = "ILoveProgramming";

// Added to make this work with the course's answer
var userIsAuthorised = false;

// Function to check the password:
function checkPass(req, res, next) {
    const password = req.body["password"];
    if (password === 'ILoveProgramming') {
        userIsAuthorised = true;
    }
    next();
}

//Use the body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

//There is also an alternative to using bodyParser as below.  You just remove the import and use:
// app.use(express.urlencoded({ extended: true }));

app.use(checkPass);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", (req, res) => {
    // Instructor's Code:
    if (userIsAuthorised) {
        res.sendFile(__dirname + "/public/secret.html");
    } else {
        res.redirect("/");
    }
    
//    Commented out my own code
//    const { password } = req.body;
//    if (password === secret) {
//        res.sendFile(__dirname + "/public/secret.html");
//    } else {
//        res.sendFile(__dirname + "/public/index.html")
//    }
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

// While my solution worked, I will comment out what I did and show what she did as the actual code to confirm 
// an extra way of doing it
