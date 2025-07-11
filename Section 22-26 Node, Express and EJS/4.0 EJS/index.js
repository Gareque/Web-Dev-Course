import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    const today = new Date();
    const day = today.getDay();

    let type = "a weekday";
    let adv = "It's time to work hard!"

    if (day === 0 || day === 6) {
        type = "It's the weekend!";
        adv = "Chill out for once!!";
    }
    res.render("index.ejs", { 
        dayType: type,
        advice: adv,
    });
});


app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
