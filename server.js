const express = require('express');
const app = express();
require('dotenv').config();
const dbConfig = require('./dbConfig/dbConfig');

const portfolioRout = require('./routes/portfolioRoute');

app.use(express.json());

app.use("/api/portfolio", portfolioRout);



const PORT = process.env.PORT || 5000;
const path = require("path")

if (process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, "client/build")))
    app.get("*", (req, res)=>{
        res.sendFile(path.join(__dirname, "client/build/index.html"))
    })
}


app.listen(PORT, () => {
    console.log(`server runing on port ${PORT}` )
})