import {
    GET_CONTACTS,
    GET_CONTACTS_SUCCESS,
    GET_CONTACTS_ERROR,

    GET_CONTACT_BY_ID,
    GET_CONTACT_BY_ID_SUCCESS,
    GET_CONTACT_BY_ID_ERROR,

    ADD_CONTACT,
    ADD_CONTACT_SUCCESS,
    ADD_CONTACT_ERROR,

    UPDATE_CONTACT,
    UPDATE_CONTACT_SUCCESS,
    UPDATE_CONTACT_ERROR,

    DELETE_CONTACT,
    DELETE_CONTACT_SUCCESS,
    DELETE_CONTACT_ERROR

} from '../action/contactAction';

export function getAllContact(state = {data: [], loading: false}, action) {
    switch (action.type) {
        case GET_CONTACTS:
            return{
                ...state,
                loading: true
            }
            break;
        case GET_CONTACTS_SUCCESS:
            return{
                ...state,
                data: action.data,
                loading: false
            }
            break;
        case GET_CONTACTS_ERROR:
            return{
                ...state,
                error: action.error,
                loading: false
            }
            break;
    
        default:
            return state;
            break;
    }
}

export function getContactById(state = {data: []}, action) {
    switch (action.type) {
        case GET_CONTACT_BY_ID:
            return{
                ...state
            }
            break;
        case GET_CONTACT_BY_ID_SUCCESS:
            return{
                ...state,
                data: action.data
            }
            break;
        case GET_CONTACT_BY_ID_ERROR:
            return{
                ...state,
                error: action.error
            }
            break;
    
        default:
            return state;
            break;
    }
}

export function addContact(state = {data: []}, action) {
    console.log(state, action)
    switch (action.type) {
        case ADD_CONTACT:
            return{
                ...state
            }
            break;
        case ADD_CONTACT_SUCCESS:
            return{
                ...state,
                data: action.data
            }
            break;
        case ADD_CONTACT_ERROR:
            return{
                ...state,
                error: action.error
            }
            break;
    
        default:
            return state;
            break;
    }
}

export function updateContact(state = {data: []}, action) {
    switch (action.type) {
        case UPDATE_CONTACT:
            return{
                ...state
            }
            break;
        case UPDATE_CONTACT_SUCCESS:
            return{
                ...state,
                data: action.data
            }
            break;
        case UPDATE_CONTACT_ERROR:
            return{
                ...state,
                error: action.error
            }
            break;
    
        default:
            return state;
            break;
    }
}

export function delContact(state = {data: []}, action) {
    switch (action.type) {
        case DELETE_CONTACT:
            return{
                ...state
            }
            break;
        case DELETE_CONTACT_SUCCESS:
            return{
                ...state,
                data: action.data
            }
            break;
        case DELETE_CONTACT_ERROR:
            return{
                ...state,
                error: action.error
            }
            break;
    
        default:
            return state;
            break;
    }
}