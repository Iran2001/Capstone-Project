const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const db = require('./db');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

const adminCredentials = {
  username: 'Admin',
  password: 'Admin@123'
};

const saltRounds = 10; // Number of salt rounds for hashing

app.post('/api/signup', async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const userId = await db.addUser({ username, email, password: hashedPassword });
    res.status(200).json({ message: 'Signup successful', userId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Signup failed', error });
  }
});

app.post('/api/signin', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  if (email === adminCredentials.username && password === adminCredentials.password) {
    return res.status(200).json({ message: 'Admin signin successful', isAdmin: true });
  }

  try {
    const user = await db.getUser(email);
    if (user) {
      // Compare the hashed password with the entered password
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (passwordMatch) {
        res.status(200).json({ message: 'Signin successful', isAdmin: false });
      } else {
        res.status(401).json({ message: 'Invalid email or password' });
      }
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Signin failed', error });
  }
});

app.post('/api/teachers', async (req, res) => {
  const { lname, gender, age, lnumber, module, username, email, password } = req.body;

  if (!lname || !gender || !age || !lnumber || !module || !username || !email || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const teacherId = await db.addTeacher({ lname, gender, age, lnumber, module, username, email, password });
    res.status(200).json({ message: 'Teacher added successfully', teacherId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to add teacher', error });
  }
});

app.post('/api/students', async (req, res) => {
  const { fname, lname, gender, age, email, pnumber, cname, aid, password } = req.body;

  if (!fname || !lname || !gender || !age || !email || !pnumber || !cname || !aid || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const studentId = await db.addStudent({ fname, lname, gender, age, email, pnumber, cname, aid, password });
    res.status(200).json({ message: 'Student added successfully', studentId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to add student', error });
  }
});

app.get('/admin', (req, res) => {
  res.send('Welcome to the Admin Dashboard');
});

app.post('/api/courses', async (req, res) => {
    const { cid, cname, mcname, cpnumber, nostudent, cd, docourse } = req.body;

    if (!cid || !cname || !mcname || !cpnumber || !nostudent || !cd || !docourse) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        const courseId = await db.addCourse({ cid, cname, mcname, cpnumber, nostudent, cd, docourse });
        res.status(200).json({ message: 'Course added successfully', courseId });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to add course', error });
    }
});



// Route to fetch students
app.get('/api/students', async (req, res) => {
    try {
        const students = await db.getStudents();
        res.status(200).json(students);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to fetch students', error });
    }
});


const { getTeachers } = require('./db');


app.get('/api/teachers', async (req, res) => {
    try {
        const teachers = await getTeachers(); // Fetch teachers data from the database
        res.json(teachers);
    } catch (error) {
        console.error('Error fetching teachers:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
