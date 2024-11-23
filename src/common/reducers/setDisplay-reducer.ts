type SetState = {
    minValue: number
    maxValue: number
}

const initialState = {
    minValue: 0,
    maxValue: 10
}


export const setDisplayReducer = (state: SetState = initialState, action: ActionsType): SetState => {
    switch (action.type) {
        case 'SET-COUNTER': {
           return {...state, minValue: action.min, maxValue: action.max}
       }
        case 'SET-MINIMUM': {
            return {...state, minValue: action.minValue}
        }
        case "SET-MAXIMUM": {
            return {...state, maxValue: action.maxValue}
        }
        default: {
           return state
       }
    }

}


type SetCounter = ReturnType<typeof setCounterAC>
type SetMini = ReturnType<typeof setMiniAC>
type SetMax = ReturnType<typeof setMaxAC>

type ActionsType = SetCounter | SetMini | SetMax


const setCounterAC = (min: number, max: number) => {
    return {
        type: 'SET-COUNTER',
        min,
        max
    } as const

}

const setMiniAC = (minValue: number) => {
    return {
        type: 'SET-MINIMUM',
        minValue
    } as const
}

const setMaxAC = (maxValue: number) => {
    return {
        type: 'SET-MAXIMUM',
        maxValue
    } as const
}