import {all, fork} from "redux-saga/effects";
import {watchGetAllContact, watchGetContactById, watchUpdateContact, watchAddContact} from './contactSaga';

export default function* saga() {
    yield all([
        fork(watchGetAllContact),
        fork(watchGetContactById),
        fork(watchUpdateContact),
        fork(watchAddContact)
    ])
}