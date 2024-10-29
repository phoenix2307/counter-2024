export type SetDisplayType = {}

export type OutputDisplayType = {}

export type ButtonType = {
    style: string
    name: string
    cb: ()=>void
}

export type InputType = {
    value: string
    cb: (value: string) => void
}