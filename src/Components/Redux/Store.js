import { createStore, combineReducers } from "redux";
import { carsReducer } from "./Reducer/carsReducer";

export const SadikStore = () => {
    const store = createStore (
        combineReducers ({carsReducer}), 
        window.__REDUX_DEVTOOLS_EXTENSION && window.__REDUX_DEVTOOLS_EXTENSION()
    )
    return store;
}