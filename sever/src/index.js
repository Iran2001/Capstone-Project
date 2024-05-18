const express=require('express');
const mongooes=require('mongoose');

const app=express();

const PORT=8080;
const DB_URL='mongodb+srv://admin:admin@capstonproject.rsoq76p.mongodb.net/?retryWrites=true&w=majority&appName=CapstonProject'

mongooes.connect(DB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true

}).then(() => {
    console.log('connected to database');
}) .catch(err => console.log('DB connection error', err));



app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
});