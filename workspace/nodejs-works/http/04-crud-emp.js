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

// http://localhost:3000/api/db/emps
app.post("/api/db/emps", (req, res) => {
    empSer.addEmployee(req.body)
        .then(data => {
            let output = {};
            output.id = data; 
            output.address = `http://localhost:${PORT}/api/db/emps/${data}`
            res.json(output);
        })
        .catch(err => res.json(err))
})

// http://localhost:3000/api/db/emps/:id - specific record 

app.get("/api/db/emps/:id", async (req, res) => {
    const id = req.params.id;
    try {
        let output= {}; 
        output.emp= await  empSer.getEmpById(id); 
        output.allempslink = `http://localhost:${PORT}/api/db/emps/`; 
        res.json(output);
    }catch(err) { 
        res.json(err)
    }; 
})



// http://localhost:3000/api/db/emps/ -- all records 
app.get("/api/db/emps/", async (req, res)=> {
    try {
        const emp = await  empSer.getAllEmployees(); 
        res.json(emp);
    }catch(err) { 
        res.json(err)
    }; 
})

app.delete("/api/db/emps/:id", async (req, res)=> {
    try {
        const id = req.params.id;
        const resp = await  empSer.deleteEmpById(id) 
        res.json(resp);
    }catch(err) { 
        res.json(err)
    }; 
})

app.put("/api/db/emps",  (req, res) => {
    empSer.updateEmployee(req.body)
        .then(data => {
            let output = {};
            output = data;
            res.json(output);
        })
        .catch(err => res.json(err))
})

app.listen(PORT, () => console.log(`Application started on ${PORT}`));

