import { combineReducers } from "redux";
import {getAllContact, addContact, delContact, getContactById, updateContact} from './contactReducer';

const allReducers = combineReducers({
    contacts: getAllContact,
    contact: getContactById,
    addContact,
    updateContact,
    delContact
});

export default allReducers;