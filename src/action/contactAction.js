export const GET_CONTACTS = "GET_CONTACTS";
export const GET_CONTACTS_SUCCESS = "GET_CONTACTS_SUCCESS";
export const GET_CONTACTS_ERROR = "GET_CONTACTS_ERROR"; 

export const GET_CONTACT_BY_ID = "GET_CONTACT_BY_ID";
export const GET_CONTACT_BY_ID_SUCCESS = "GET_CONTACT_BY_ID_SUCCESS";
export const GET_CONTACT_BY_ID_ERROR = "GET_CONTACT_BY_ID_ERROR";

export const ADD_CONTACT = "ADD_CONTACT";
export const ADD_CONTACT_SUCCESS = "ADD_CONTACT_SUCCESS";
export const ADD_CONTACT_ERROR = "ADD_CONTACT_ERROR";

export const UPDATE_CONTACT = "UPDATE_CONTACT";
export const UPDATE_CONTACT_SUCCESS = "UPDATE_CONTACT_SUCCESS";
export const UPDATE_CONTACT_ERROR = "UPDATE_CONTACT_ERROR";

export const DELETE_CONTACT = "DELETE_CONTACT";
export const DELETE_CONTACT_SUCCESS = "DELETE_CONTACT_SUCCESS";
export const DELETE_CONTACT_ERROR = "DELETE_CONTACT_ERROR";

export function getAllContact() {
    return{
        type: GET_CONTACTS
    }
}

export function getContactById(id) {
    return{
        type: GET_CONTACT_BY_ID,
        id: id
    }
}

export function addContact(body) {
    console.log('action add', body)
    return{
        type: ADD_CONTACT,
        body: body
    }
}

export function updateContact(id, body) {
    return{
        type: UPDATE_CONTACT,
        id: id,
        body: body
    }
}

export function delContact(id) {
    return{
        type: DELETE_CONTACT,
        id: id
    }
}