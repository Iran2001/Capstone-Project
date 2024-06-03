const express=require('express');
const mongooes=require('mongoose');

const app=express();

const PORT=8080;
const DB_URL='mongodb+srv://admin:admin@capstonproject.rsoq76p.mongodb.net/?retryWrites=true&w=majority&appName=CapstonProject'

mongooes.connect(DB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true

}).then(() => {
    console.log('connected to database');const express = require("express");
    const cors = require("cors");
    const bodyParser = require("body-parser");
    const db = require("./db");
    
    const app = express();
    app.use(cors());
    app.use(bodyParser.json());
    
    app.post("/api/signup", (req, res) => {
        const { username, email, password } = req.body;
    
        const query = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
        db.query(query, [username, email, password], (err, results) => {
            if (err) {
                return res.status(500).send({ message: "Database error", error: err });
            }
            res.status(200).send({ message: "User registered successfully" });
        });
    });
    
    app.post("/api/signin", (req, res) => {
        const { username, password } = req.body;
    
        const query = "SELECT * FROM users WHERE username = ? AND password = ?";
        db.query(query, [username, password], (err, results) => {
            if (err) {
                return res.status(500).send({ message: "Database error", error: err });
            }
            if (results.length > 0) {
                res.status(200).send({ message: "Login successful", user: results[0] });
            } else {
                res.status(401).send({ message: "Invalid credentials" });
            }
        });
    });
    
    app.listen(5000, () => {
        console.log("Server is running on port 5000");
    });
    }) .catch(err => console.log('DB connection error', err));



app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
});