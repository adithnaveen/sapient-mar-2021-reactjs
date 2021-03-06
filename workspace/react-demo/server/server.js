import express from 'express'; 
// const express = require("express"); 
import fs from 'fs'; 
import path from 'path'

import React from 'react'
import ReactDOMServer from 'react-dom/server'; 

import App from '../src/07-hooks/ex-01'; 

const PORT = 8000; 

const app = express();

app.use("^/$", (req, res, next) => {
    fs.readFile(path.resolve("./build/index.html"), 'utf-8', (err, data) => {
        if(err) {
            console.log(err);
            return res.status(500).send("Error Processing request")
        }
        return res.send(
            data.replace(
                '<div id="root"></div>', 
                `<div id="root">${ReactDOMServer.renderToString(<App />)}</div>`
            )
        )
    })
})
// will send all css / js / assets 
app.use(express.static(path.resolve(__dirname, "..", "build"))); 

app.listen(PORT, () => {
    console.log(`Application loaded on ${PORT}`);
})