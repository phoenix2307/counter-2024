export type SetDisplayType = {}

export type OutputDisplayType = {
    currentValue: number
    increment: () => void
    reset: () => void
    stopCounting: boolean
}

export type ButtonType = {
    disabled: boolean
    name: string
    cb: () => void
}

export type InputType = {
    value: string
    cb: (value: string) => void
}