const express = require("express"); 
const app = express(); 

const bodyParser = require("body-parser")
app.use(bodyParser.json())

app.get("/", (req, res) => {
    res.send("Home Link Invoked...")
})

app.get("/example", (req, res) => {
    res.send("Example route called... ")
})

app.get("/example/:name/:age", (req, res) => {
    console.log(req.params);
    console.log("Name : ", req.params.name);
    console.log("Age : ", req.params.age);

    console.log(req.query);
    console.log("City: ", req.query.city);
    console.log("Country: ", req.query.country);

    let returnValue  = {
        name: req.params.name, 
        age: req.params.age, 
        city: req.query.city, 
        country: req.query.country
    }

    res.send(returnValue)
})


app.post("/example", (req, res) => {
    console.log(req.body)
    
    res.send("Data received ")
})

app.listen(3000);