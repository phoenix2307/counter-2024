export type SetDisplayType = {
    setCounter: (minValue: number, maxValue: number) => void
    min: number
    max: number
}

export type OutputDisplayType = {
    currentValue: number
    increment: () => void
    reset: () => void
    color: string
    min: number
    max: number
}

export type ButtonType = {
    disabled: boolean
    name: string
    cb: () => void
}

export type InputType = {
    value: number
    cb: (value: string) => void
    error?: boolean
    validate?: string
}