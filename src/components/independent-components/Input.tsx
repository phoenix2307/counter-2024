import {ChangeEvent, FC} from "react";
import {InputType} from "../types/types";
import {InputStyle} from "../styled-comps/styles";

export const Input: FC<InputType> = (props) => {
    const {value, cb, error, validate} = props

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        cb(e.currentTarget.value)
    }

    return (
        <div>
            <InputStyle
                value={value}
                onChange={onChangeHandler}
                type="number"
                error={error}
                validate={validate}
            />

        </div>
    )
}