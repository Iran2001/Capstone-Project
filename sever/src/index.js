const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const db = require("./db");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/api/signup", async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const query = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
        db.query(query, [username, email, hashedPassword], (err, results) => {
            if (err) {
                return res.status(500).send({ message: "Database error", error: err });
            }
            res.status(200).send({ message: "User registered successfully" });
        });
    } catch (err) {
        res.status(500).send({ message: "Error hashing password", error: err });
    }
});

app.post("/api/signin", (req, res) => {
    const { username, password } = req.body;

    const query = "SELECT * FROM users WHERE username = ?";
    db.query(query, [username], async (err, results) => {
        if (err) {
            return res.status(500).send({ message: "Database error", error: err });
        }
        if (results.length > 0) {
            const user = results[0];
            const isPasswordValid = await bcrypt.compare(password, user.password);
            if (isPasswordValid) {
                res.status(200).send({ message: "Login successful", user });
            } else {
                res.status(401).send({ message: "Invalid credentials" });
            }
        } else {
            res.status(401).send({ message: "Invalid credentials" });
        }
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
