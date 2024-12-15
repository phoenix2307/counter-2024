import {RootStateType} from "../app/store_Redux_LS";

//
export const saveState = (state: RootStateType) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
        localStorage.setItem('min-value', JSON.stringify(state.setReduxLS.minValue))
        localStorage.setItem('max-value', JSON.stringify(state.setReduxLS.maxValue))
        localStorage.setItem('current-value', JSON.stringify(state.outputReduxLS.currentValue))
    } catch {
        // ignore write errors
    }
}

//
export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};
