type InitialState = typeof initialState
const initialState = {
    showOutput: true
}
export const showReducerLS = (state: InitialState = initialState, action: ActionType) => {
    switch (action.type) {
        case "SHOW-OUTPUT": {
            return {...state, showOutput: true}
        }
        case "SHOW-SET": {
            return {...state, showOutput: false}
        }
        default: {
            return state
        }
    }
}

type ActionType = ShowOutput | ShowSet
type ShowOutput = ReturnType<typeof showOutputAC>
type ShowSet = ReturnType<typeof showSetAC>



export const showOutputAC = () => {
    return {type: 'SHOW-OUTPUT'} as const
}

export const showSetAC = () => {
    return {type: 'SHOW-SET'} as const
}