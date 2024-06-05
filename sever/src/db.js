const mysql = require('mysql');
const bcrypt = require('bcrypt');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'capstone_project'
});

db.connect(err => {
  if (err) {
    console.error('Database connection failed: ' + err.stack);
    return;
  }
  console.log('Connected to database.');
});

const saltRounds = 10; // Number of salt rounds for hashing

const addUser = ({ username, email, password }) => {
  return new Promise(async (resolve, reject) => {
    try {
      // Hash the password
      const hashedPassword = await bcrypt.hash(password, saltRounds);
      
      const query = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
      db.query(query, [username, email, hashedPassword], (err, results) => {
        if (err) {
          return reject(err);
        }
        resolve(results.insertId);
      });
    } catch (error) {
      reject(error);
    }
  });
};

const getUser = (email) => {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM users WHERE email = ?';
    db.query(query, [email], (err, results) => {
      if (err) {
        return reject(err);
      }
      resolve(results[0]);
    });
  });
};


const addTeacher = ({ lname, gender, age, lnumber, module, username, email, password }) => {
  return new Promise((resolve, reject) => {
    const query = 'INSERT INTO teachers (lname, gender, age, lnumber, module, username, email, password) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
    db.query(query, [lname, gender, age, lnumber, module, username, email, password], (err, results) => {
      if (err) {
        return reject(err);
      }
      resolve(results.insertId);
    });
  });
};

const addStudent = ({ fname, lname, gender, age, email, pnumber, cname, aid, password }) => {
  return new Promise((resolve, reject) => {
    const query = 'INSERT INTO students (fname, lname, gender, age, email, pnumber, cname, aid, password) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
    db.query(query, [fname, lname, gender, age, email, pnumber, cname, aid, password], (err, results) => {
      if (err) {
        return reject(err);
      }
      resolve(results.insertId);
    });
  });
};

// Function to add a course to the database
const addCourse = ({ cid, cname, mcname, cpnumber, nostudent, cd, docourse }) => {
    return new Promise((resolve, reject) => {
        const query = 'INSERT INTO courses (cid, cname, mcname, cpnumber, nostudent, cd, docourse) VALUES (?, ?, ?, ?, ?, ?, ?)';
        db.query(query, [cid, cname, mcname, cpnumber, nostudent, cd, docourse], (err, results) => {
            if (err) {
                return reject(err);
            }
            resolve(results.insertId);
        });
    });
};

const getStudents = () => {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM students';
        db.query(query, (err, results) => {
            if (err) {
                return reject(err);
            }
            resolve(results);
        });
    });
};


// Function to fetch teachers data from the database
const getTeachers = () => {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM teachers'; // SQL query to select all data from the teachers table
        db.query(query, (err, results) => {
            if (err) {
                reject(err); // Reject the promise if there's an error
            } else {
                resolve(results); // Resolve the promise with the fetched data
            }
        });
    });
};


module.exports = {
  addUser,
  getUser,
  addTeacher,
  addStudent,
  addCourse,
  getTeachers,
  getStudents,
  
};
