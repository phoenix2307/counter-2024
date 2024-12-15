type StateType = typeof initialState
type ActionsType = IncrementType | ResetType | SetType

const initialState = {currentValue: 0}

export const outputReducerLS = (state: StateType = initialState, action: ActionsType) => {
    switch (action.type) {
        case "INCREMENT":{
            return {...state, currentValue: action.currentValue + 1}
        }
        case "RESET":{
            return {...state, currentValue: action.minValue}
        }
        case "SET-CURRENT-VALUE": {
            return {...state, currentValue: action.value}
        }
        default: {
            return state
        }
    }
}

export const incrementAC = (currentValue: number) => {
    return {type: 'INCREMENT', currentValue} as const
}

export const resetAC = (minValue: number) => {
    return {type: 'RESET', minValue} as const
}

export const setCurrentValueAC = (value: number) => {
    return {type: 'SET-CURRENT-VALUE', value} as const
}
type IncrementType = ReturnType<typeof incrementAC>
type ResetType = ReturnType<typeof resetAC>
type SetType = ReturnType<typeof setCurrentValueAC>