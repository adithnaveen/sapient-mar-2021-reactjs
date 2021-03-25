import {ADD_CONTACT, DELETE_CONTACT, FETCH_CONTACTS, URL} from '../constants/types'

export const fetchContacts =() => {
    return async (dispatch) => {
        let resp = await fetch(URL)
        let contacts = await resp.json()
        let action = {type:FETCH_CONTACTS, data : contacts}
        dispatch(action)
    }
}

export const addContact = (contact) => async (dispatch) => {
        let resp = await fetch(URL, {
            method: 'POST', 
            body : JSON.stringify(contact), 
            headers : {
                'Content-Type' :'application/json'
            }
        }); 

        let newContact = await resp.json();
        dispatch({type:ADD_CONTACT, data: newContact})
}

export const deleteContact = (id) => async (dispatch) => {
    await fetch(URL + id,  {method: 'DELETE'})
    dispatch({type:DELETE_CONTACT, data: id})
}
