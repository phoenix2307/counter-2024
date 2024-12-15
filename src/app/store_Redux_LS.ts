import {combineReducers, createStore} from 'redux';
import {setReducerLS} from "../common/reducers-redux-LS/set-reducer-LS";
import {outputReducerLS} from "../common/reducers-redux-LS/output-reducer-LS";
import {showReducerLS} from "../common/reducers-redux-LS/show-reducer-LS";
import {loadState, saveState} from "../utils/local-storage";

export const rootReducer = combineReducers({
    setReduxLS: setReducerLS,
    outputReduxLS: outputReducerLS,
    showOutput: showReducerLS
});


const persistedState = loadState();
export const store = createStore(rootReducer, persistedState);


store.subscribe(() => {
    saveState({
        setReduxLS: store.getState().setReduxLS,
        outputReduxLS: store.getState().outputReduxLS,
        showOutput: store.getState().showOutput
    })
})
export type AppStoreType = typeof store
export type RootStateType = ReturnType<typeof store.getState>
export type DispatchType = ReturnType<typeof store.dispatch>

// @ts-ignore
window.store = store