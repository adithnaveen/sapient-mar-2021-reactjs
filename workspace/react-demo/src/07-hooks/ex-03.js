import React, { useState, useEffect } from 'react'

import 'bootstrap/dist/css/bootstrap.css';

export default function App() {
    const [data, setData] = useState([]);

    // this will be a substitution for componentDidMount / componentDidUpdate 

    useEffect(() => {
        fetch("https://api.github.com/users")
            .then(resp => resp.json())
            // .then(data => setData(data))
            .then(setData);
    }, []);


    if (data) {
        return (
            <div className="container">

                <button className="btn btn-danger"
                    onClick={() => { setData([]) }}
                >Remove</button>

                <ul>
                    {
                        data.map((user, key) =>
                            (<li key={key}>{user.login}</li>)
                        )
                    }
                </ul>
            </div>
        )
    }

    return <p>data not available</p>
}