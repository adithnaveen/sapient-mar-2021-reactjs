import React, { Component } from 'react'



class CounterApp extends Component {
    state = { count: 1 }
    num = 1;

    constructor() {
        super();
        console.log("CounterApp.constructor");
    }
    render() {
        console.log("CounterApp.render()")
        return (
            <div className="container">
                <p>Value of count: {this.state.count}</p>
                <p>Value of Number {this.num} </p>
                <button className="btn btn-secondary"
                    onClick={() => {
                        this.setState({ count: this.state.count + 1 })
                    }}
                >Increment Countr </button>

                <button className="btn btn-primary"
                    onClick={() => {
                        this.num++;
                        console.log("Number value : ", this.num);
                        // since you are mutating non state variable, we have to 
                        // call forceUpdate explicitly to call the render 
                        this.forceUpdate();
                    }}
                >Increment Number</button>


            </div>
        );
    }

    componentDidMount() {
        console.log("CounterApp.componentDidMount()");
    }

    componentWillUnmount() {
        console.log("CounterApp.componentWillUnmount()");
    }
}

export default CounterApp;