export type SetState = {
    minValue: number
    maxValue: number
    errorValue: boolean
}

const initialState = {
    minValue: 0,
    maxValue: 10,
    errorValue: false
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
        case "SET-ERROR":{
            return {...state, errorValue: action.errorValue}
        }
        default: {
           return state
       }
    }

}


type SetCounter = ReturnType<typeof setCounterAC>
type SetMini = ReturnType<typeof setMiniAC>
type SetMax = ReturnType<typeof setMaxAC>
type SetError = ReturnType<typeof setErrorAC>

type ActionsType = SetCounter | SetMini | SetMax | SetError


export const setCounterAC = (min: number, max: number) => {
    return {
        type: 'SET-COUNTER',
        min,
        max
    } as const

}

export const setMiniAC = (minValue: number) => {
    return {
        type: 'SET-MINIMUM',
        minValue
    } as const
}

export const setMaxAC = (maxValue: number) => {
    return {
        type: 'SET-MAXIMUM',
        maxValue
    } as const
}

export const setErrorAC = (errorValue: boolean) => {
    return {
        type: 'SET-ERROR',
        errorValue
    } as const
}