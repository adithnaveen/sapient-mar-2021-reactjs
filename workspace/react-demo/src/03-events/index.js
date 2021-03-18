import React, { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.css';
import './style.css';



class App extends Component {

    state = { count: 0 };
    // constructor() {
    //     super();
    //     console.log("in constructor... ");
    //     this.btnHandler = this.btnHandler.bind(this);
    //     this.someHandler = this.someHandler.bind(this); 
    // }

    // version 1.0
    // btnHandler ()  {
    //     console.log("Button clicked....");
    // }


    // version 2.0 
    // the binding is implicitly taken care by react 
    btnHandler = () => {
        console.log("Button clicked....");
    }

    increment = () => {
        this.setState({ count: this.state.count + 1 })
    }
    decrement = () => {
        this.setState({ count: this.state.count - 1 })
    }

    incrementOrDecrement = (val) => {
        this.setState({ count: this.state.count + val });
    }

    render() {
        console.log(this);

        return (
            <div>
                <h3>this is component area</h3>
                <button className="btn btn-primary"
                    onClick={this.btnHandler}
                >Button1</button>
                <button className="btn btn-danger"
                    onClick={this.btnHandler}
                > Button2</button >
                <br />
                <button className="btn btn-secondary" onClick={this.increment}>Increment</button>
                <button className="btn btn-primary" onClick={this.decrement}>Decrement</button>
                <br />

                <button className="btn btn-primary" onClick={() => {
                    this.incrementOrDecrement(1)
                }}>Increment</button>
                <button className="btn btn-primary" onClick={() => {
                    this.incrementOrDecrement(-1)
                }}>Decrement</button>
                <br />

                {/* stateless component} */}
                <Btn handler={() => { this.incrementOrDecrement(1) }} caption="INCREMENT" />
                <Btn handler={() => { this.incrementOrDecrement(-1) }} caption="DECREMENT" />

                The value should change here... {this.state.count}

            </div >
        );
    }
}

export default App;