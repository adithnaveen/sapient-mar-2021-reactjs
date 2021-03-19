import React, { Component } from 'react'


function loading1 (OldComponent) {

    return class NewComponent extends Component {
       
        render() {
            let output = <OldComponent {...this.props} />
         
            if(this.props.emps.length ===0) {
                output = <p className="alert alert-danger">loading pls wait... </p>
            }
            
            return output; 
        }
    } 
}

export default loading1; 