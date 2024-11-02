import {FC, useState} from "react";
import {SetDisplayType} from "../types/types";
import {BlockButtons, BlockInput, DisplayContainer, DisplaySet} from "../styled-comps/styles";
import {Button} from "../independent-components/Button";
import {Input} from "../independent-components/Input";


export const SetDisplay: FC<SetDisplayType> = (props) => {
    const {setCounter, min, max} = props

    const [minValue, setMinValue] = useState(min)
    const [maxValue, setMaxValue] = useState(max)
    const [error, setError] = useState(false)

    const setCounterHandler = () => {
        setCounter(minValue, maxValue)
    }

    const minInputHandler = (value: number) => {
        setMinValue(value)
    }
    const maxInputHandler = (value: number) => {
        setMaxValue(value)
    }


    return (
        <DisplayContainer>
            <DisplaySet>
                <BlockInput>
                    <div>min value:</div>
                    <Input value={minValue} cb={minInputHandler} error={error}/>
                </BlockInput>
                <BlockInput>
                    <div>max value:</div>
                    <Input value={maxValue} cb={maxInputHandler} error={error}/>
                </BlockInput>
            </DisplaySet>
            <BlockButtons>
                <Button disabled={false} name={'SET'} cb={setCounterHandler}/>
            </BlockButtons>
        </DisplayContainer>
    )
}