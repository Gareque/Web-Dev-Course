// HINTS:
// 1. Import express and axio
import express from "express";
import axios from "axios";

const API_URL = "https://secrets-api.appbrewery.com";

// 2. Create an express app and set the port number.
const app = express();
const port = 3000;

// 3. Use the public folder for static files.
app.use(express.static("public"));

// 4. When the user goes to the home page it should render the index.ejs file.
app.get("/", async (req, res) => {
    try {
        const result = await axios.get(`${API_URL}` + "/random");
        res.render("index.ejs", {  
            secret: result.data.secret,
            user: result.data.username,
         });
    } catch (error) {
        console.log(error.response.data);
    };
});

// 5. Use axios to get a random secret and pass it to index.ejs to display the
// secret and the username of the secret.

// 6. Listen on your predefined port and start the server.

app.listen(port, () => {
    console.log(`The server is running on port ${port}`);
});