import {FC} from "react";
import {InputType} from "./types/types";

export const Input:FC<InputType> = (props) => {
    const {value, cb} = props
    return (
        <>
            <input type="text"/>
        </>
    )
}