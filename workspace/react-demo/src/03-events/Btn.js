import React from 'react'

export default  Btn = props => {
    return (<button className="btn btn-warning" onClick={props.handler}>{props.caption}</button>)
}
