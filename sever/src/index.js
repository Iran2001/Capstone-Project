const express = require("express");
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

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
