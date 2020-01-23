import { put, takeLatest } from "redux-saga/effects";
import {
    GET_CONTACTS,
    GET_CONTACTS_SUCCESS,
    GET_CONTACTS_ERROR,
    GET_CONTACT_BY_ID,
    GET_CONTACT_BY_ID_SUCCESS,
    GET_CONTACT_BY_ID_ERROR,
    UPDATE_CONTACT,
    UPDATE_CONTACT_SUCCESS,
    UPDATE_CONTACT_ERROR,
    ADD_CONTACT,
    ADD_CONTACT_SUCCESS,
    ADD_CONTACT_ERROR,
} from '../action/contactAction'

const CONTACT_URL = 'http://simple-contact-crud.herokuapp.com/contact';

function* getAllContact() {
    try {
        const fetching = yield fetch(CONTACT_URL);
        const response = yield fetching.json();
        yield put({
            type: GET_CONTACTS_SUCCESS,
            data: response.data
        })
    } catch (error) {
        yield put({
            type: GET_CONTACTS_ERROR,
            error: error
        })
    }
}

function* getContactById(action){
    try {
        const fetching = yield fetch(CONTACT_URL+'/'+action.id);
        const response = yield fetching.json();
        yield put({
            type: GET_CONTACT_BY_ID_SUCCESS,
            data: response.data
        })
    } catch (error) {
        yield put({
            type: GET_CONTACT_BY_ID_ERROR,
            error: error
        })        
    }
}

function* updateContact(action){
    try {
        const fetching = yield fetch(CONTACT_URL+'/'+action.id, {
            method: "PUT",
            headers:
                {
                    "Content-Type": "application/json"
                },
           body: JSON.stringify(action.body)
        });
        const response = yield fetching.json();
        yield put({
            type: UPDATE_CONTACT_SUCCESS,
            data: response
        })
    } catch (error) {
        yield put({
            type: UPDATE_CONTACT_ERROR,
            error: error
        })        
    }
}

function* addContact(action){
    console.log('add saga', action)
    try {
        const fetching = yield fetch(CONTACT_URL, {
            method: "POST",
            headers:
                {
                    "Content-Type": "application/json"
                },
           body: JSON.stringify(action.body)
        });
        const response = yield fetching.json();
        yield put({
            type: ADD_CONTACT_SUCCESS,
            data: response
        })
    } catch (error) {
        yield put({
            type: ADD_CONTACT_ERROR,
            error: error
        })        
    }
}

export function* watchGetAllContact() {
    yield takeLatest(GET_CONTACTS, getAllContact);
}

export function* watchGetContactById(){
    yield takeLatest(GET_CONTACT_BY_ID, getContactById);
}

export function* watchUpdateContact(){
    yield takeLatest(UPDATE_CONTACT, updateContact);
}

export function* watchAddContact(){
    yield takeLatest(ADD_CONTACT, addContact);
}