import {createStore, applyMiddleware} from "redux";
import reducers from "../reducers";
import createSagaMiddleware from "redux-saga";
import saga from "../saga";


const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    reducers,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(saga);

export {store}