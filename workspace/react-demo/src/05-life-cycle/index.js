import React, { Component } from 'react'

import CounterApp from './CounterApp'
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
    state = {
        showCounterApp: false
    }
    render() {

        let output = null;
        if (this.state.showCounterApp === true) {
            output = <CounterApp />
        }
        return (
            <div className="container">
                <h2 className="alert alert-danger">Life Cycle</h2>
                <button className="btn btn-primary"
                    onClick={() => {
                        this.setState(
                            { showCounterApp: !this.state.showCounterApp });
                    }}
                >Show / Hide Counter App</button>
                <hr />
                {output}
            </div>
        );
    }
}

export default App;