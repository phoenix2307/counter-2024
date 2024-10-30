import {FC} from "react";
import {InputType} from "../types/types";
import s from './Input.module.css'

export const Input:FC<InputType> = (props) => {
    const {value, cb} = props

    const currentStyle = s.inputStyle
    const errorStyle = s.errorStyle

    return (
        <div>
            <input className={currentStyle} type="number"/>
        </div>
    )
}