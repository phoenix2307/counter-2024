import { createStore, combineReducers } from 'redux';
import {setDisplayReducer} from "../common/reducers/setDisplay-reducer";
import {outputDisplayReducer} from "../common/reducers/outputDisplay-reducer";

const rootReducer = combineReducers({
    setDisplay: setDisplayReducer,
    outputDisplay: outputDisplayReducer
});

export const store = createStore(rootReducer);
export type RootState = ReturnType<typeof store.getState>
export type Dispatch = ReturnType<typeof store.dispatch>

// @ts-ignore
window.store = store