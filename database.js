const express = require('express')
const mysql = require('mysql')

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: 'ticketmysql'
})

db.connect(err =>{
    if(err) {
        throw err
    }
    console.log('MySQL Connected');
})

const app = express()

//Create Database
app.get("/createdb",(req, res) =>{
    let sql = "CREATE DATABASE ticketmysql";
    db.query(sql, (err) => {
        if(err) {
            throw err
        }
        res.send("Database Created");
    });
});

//Create Table
app.get("/createevent",(req, res) =>{
    let sql = "CREATE TABLE event(id INT AUTO_INCREMENT, title VARCHAR(255), description TEXT, ticketBal INT, dateTime DATETIME, location VARCHAR(255), image VARCHAR(255),node dat PRIMARY KEY(id))";
    db.query(sql, (err) => {
        if(err) {
            throw err
        }
        res.send("Event Table Created");
    });
});


/*
app.get("/event-list",(req, res) =>{
    let sql = "SELECT * FROM event";
    db.query(sql, (err, results) => {
        if(err) {
            throw err
        }
        //print results in browser
        //console.log(results)
        //print results in terminal
        res.send("Database Retrieved");
    });
});

app.use(express.static(__dirname + "/src"))
*/
app.get('/', function(req, res) {
    //res.sendFile('index.html')
    res.send("Hello")
});

app.get('/load', function(req, res) {
    db.query("SELECT * FROM event", function(err, rows) {
        if(err) {
            console.log("Problem with MYSQL" + err);
        }
        else {
            //res.end(JSON.stringify(rows));
            res.json({
                events: rows
            });
            for (let i=0; i<rows.length; i++) {
                console.log(rows[i].id);
                console.log(rows[i].title);
                document.getElementById("id").innerHTML = rows[i].id
                document.getElementById("demo").innerHTML = rows[i].title
            }
            

        }
    });
});

app.listen('3000', () => {
    console.log('Server started on port 3000')
})

module.exports = db;