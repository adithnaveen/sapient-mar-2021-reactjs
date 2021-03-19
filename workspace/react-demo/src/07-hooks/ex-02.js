import React, { useState, useEffect } from 'react'

import 'bootstrap/dist/css/bootstrap.css'
export default function App() {

    const [name, setName] = useState("Sameer");
    const [admin, setAdmin] = useState(false);

    // for the useEffect if you dont pass second argument [] then the 
    // use effect will be called for all the useState

    // if you pass second argument as []  then it will be called only once, 
    // i.e., a the load time only 
    useEffect(() => {
        console.log(`You are logged in as ${admin ? "Admin" : "Not Admin"}`);
    }, [admin])


    useEffect(() => {
        document.title = `Page Belongs To ${name}`;
        console.log(`Page Belongs To ${name}`);
    }, [name])

    return (
        <div>
            <p className="alert alert-info">Hello Mr. {name}</p>
            <p className="alert alert-info">You are {admin ? "Admin" : "Not Admin"}</p>

            <br />
            <button className="btn btn-danger"
                onClick={() => {
                    setName("Sameer Singal")
                }}
            >Get Full Name</button>
            <button className="btn btn-primary"
                onClick={() => { setAdmin(true) }}
            >Login As Admin</button>
        </div>
    )

}

