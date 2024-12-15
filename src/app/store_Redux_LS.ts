import {combineReducers, createStore, applyMiddleware} from 'redux';
import {setReducerLS} from "../common/reducers-redux-LS/set-reducer-LS";
import {outputReducerLS} from "../common/reducers-redux-LS/output-reducer-LS";
import {showReducerLS} from "../common/reducers-redux-LS/show-reducer-LS";
import {thunk} from "redux-thunk";

export const rootReducer = combineReducers({
    setReduxLS: setReducerLS,
    outputReduxLS: outputReducerLS,
    showOutput: showReducerLS
});

let preloadedState;
const persistedCounterString = localStorage.getItem('counter-state')
if(persistedCounterString) {
    preloadedState = JSON.parse(persistedCounterString)

}


export const store = createStore(rootReducer, preloadedState, applyMiddleware(thunk));
// export const store = createStore(rootReducer,(window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
//     (window as any).__REDUX_DEVTOOLS_EXTENSION__());

store.subscribe(() => {
    localStorage.setItem('counter-state', JSON.stringify(store.getState()))
    localStorage.setItem('min-value', JSON.stringify(store.getState().setReduxLS.minValue))
    localStorage.setItem('max-value', JSON.stringify(store.getState().setReduxLS.maxValue))
})
export type AppStoreType = typeof store
export type RootStateType = ReturnType<typeof store.getState>
export type DispatchType = ReturnType<typeof store.dispatch>

// @ts-ignore
window.store = store