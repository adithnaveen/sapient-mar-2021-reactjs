import React, { Component } from 'react'
import { connect } from 'react-redux'

class Product extends Component {
    increment = () => {
        // this.setState({ price: this.state.price + 1000 })
        this.props.dispatch({ type: "INCREMENT", data: 1000 })
    }
    decrement = () => {
        // this.setState({ price: this.state.price - 1000 })
        this.props.dispatch({ type: "DECREMENT", data: 1000 })
    }

    render() {
        return (
            <div>
                <h2>Product Application</h2>
                <p className="alert alert-info">Product Price {this.props.price}</p>

                <button className="btn btn-primary" onClick={this.increment}>Increment</button>
                <button className="btn btn-primary" onClick={this.decrement}>Decrement</button>

            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        price: state.price
    }
}

export default connect(mapStateToProps)(Product);
