import 'bootstrap/dist/css/bootstrap.css'
import './index.css';

import {createStore} from 'redux';

const initialState = ['Sameer', 'Gurveen'];
const reducer = (state=initialState, action) => {
    switch (action.type) {
        case "ADD_NAME":
            return [...state, action.data]
        case "DELETE_NAME":
            let names = [...state]
            names.splice(action.data, 1)
            return names
        default:
            return state
    }
}

const store = createStore(reducer)
window['store'] = store

///////////////////////////////////////////

const submitHandler =(evt) => {
    evt.preventDefault();
    const name = document.getElementById("name").value;
    const action = {type:"ADD_NAME", data:name};
    store.dispatch(action);
    document.getElementById("name").value ="";
    document.getElementById("name").focus();
}

document.getElementById("formName").onsubmit = submitHandler; 

///////////////////////////////////////////

const updateList = () => {
    let names = store.getState(); 
    let list = names.map((name, index) =>
        '<li class="list-group-item"> '+ 
        '<button class="btn btn-danger" onclick="deleteName('+index+')"> X </button>'
        + name +'</li>'
    )
    let listOfNames = list.join('');
    document.getElementById("namesList").innerHTML = listOfNames; 
}

window['updateList'] = updateList;
updateList()
store.subscribe(updateList);

///////////////////////////////////////////////

window['deleteName'] = (index) => {
    const action = {type:"DELETE_NAME", data:index}
    store.dispatch(action)
}

