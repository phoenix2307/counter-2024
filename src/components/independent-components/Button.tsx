import {FC} from "react";
import {ButtonType} from "../types/types";
import s from './Button.module.css'

export const Button: FC<ButtonType> = (props) => {
    const {disabled, name, cb} = props

    const buttonStyle = s.buttonCounter

    const onClickHandler = () => {
        cb()
    }

    return <button className={buttonStyle} onClick={onClickHandler}>{name}</button>


}