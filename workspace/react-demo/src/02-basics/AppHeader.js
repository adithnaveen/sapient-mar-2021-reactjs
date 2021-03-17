import React, { Component, Fragment } from 'react'


class AppHeader extends Component {
    render() {

        console.log(this.props);
        return (
            <Fragment>
                <h1>This is Header Conent - Company {this.props.company}</h1>
                <p>{this.props.location}</p>
                <hr />
            </Fragment>
        );
    }
}

export default AppHeader;