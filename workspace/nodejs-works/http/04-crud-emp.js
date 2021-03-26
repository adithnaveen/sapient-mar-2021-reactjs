const bodyParser = require("body-parser"); 
const express = require("express")
const app = express(); 
app.use(bodyParser.json())
const PORT =3000; 


// your business logic 
const EmployeeService = require("./services/emp-service-mongo")
const empSer = new EmployeeService(); 

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE")
    res.header("Access-Control-Allow-Headers", "*")
    next() 
})

app.post("/api/db/emps", (req, res) => {
    empSer.addEmployee(req.body)
        .then(data => {
            let output = {};
            output.id = data; 
            res.json(output);
        })
        .catch(err => res.json(err))
})

app.listen(PORT);