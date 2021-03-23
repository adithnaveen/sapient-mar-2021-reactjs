// this is hooks with useState 

import React, { useState } from 'react'

const App = () => {

    const [count, setCount] = useState(0);
    const [name, setName] = useState("Pulkit");
    const [checked, setChecked] = useState(false);
    return (
        <div>
            <h1>this is first hook</h1>
            <p>value of coun {count}</p>
            <p>User Name is {name}</p>
            <p>checked status {checked ? "Checked " : "UnChecked"}</p>
            <button className="btn btn-primary"
                onClick={() => { setCount(count + 1); }}
            >Increment</button>

            <button className="btn btn-primary"
                onClick={() => { setCount(count - 1) }}
            >Decrement</button>
            <hr />
            <button className="btn btn-secondary"
                onClick={() => {
                    setName("Pulkit Malhotra")
                }}
            >Change To Full Name</button>

            <input type="checkbox" value={checked} onChange={() => {
                setChecked((checked) => !checked)
            }} />

        </div>
    )
}

export default App;


