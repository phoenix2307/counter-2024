type StateType = {
    currentValue: number
}
type ActionsType = IncrementType | ResetType

export const outputDisplayReducer = (state: StateType, action: ActionsType) => {
    switch (action.type) {
        case "INCREMENT":{
            return {...state, currentValue: action.currentValue + 1}
        }
        case "RESET":{
            return {...state, currentValue: action.minValue}
        }
        default: {
            return state
        }
    }
}

const incrementAC = (currentValue: number) => {
    return {type: 'INCREMENT', currentValue} as const
}

const resetAC = (minValue: number) => {
    return {type: 'RESET', minValue} as const
}
type IncrementType = ReturnType<typeof incrementAC>
type ResetType = ReturnType<typeof resetAC>