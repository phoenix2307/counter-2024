import {FC} from "react";
import {ButtonType} from "../types/types";
import {ButtonStyle} from "../styled-comps/styles";

export const Button: FC<ButtonType> = (props) => {
    const {disabled, name, cb} = props

    const onClickHandler = () => {
        cb()
    }

    return <ButtonStyle  onClick={onClickHandler} disabled={disabled} >{name}</ButtonStyle>


}