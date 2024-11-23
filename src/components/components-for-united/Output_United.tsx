import {FC, useState} from "react";
import {BlockButtons, DisplayContainer, DisplayOutput} from "../../common/styled-comps/styles";
import {Button} from "../independent-components/Button";

type OutputType = {
    currentValue: number
    incrementCounter: () => void
    resetCounter: () => void
    settingCounter: () => void
    disabledInc: boolean
    disabledReset: boolean
    color: string
}
export const Output_United: FC<OutputType> = (props) => {
    const {
        currentValue, incrementCounter,
        resetCounter, settingCounter,
        disabledInc, disabledReset, color
    } = props


    const incrementHandler = () => {
        incrementCounter()
    }
    const resetHandler = () => {
        resetCounter()
    }
    const settingHandler = () => {
        settingCounter()
    }

    return (
        <DisplayContainer>
            <DisplayOutput color={color}>
                {currentValue}
            </DisplayOutput>
            <BlockButtons>
                <Button disabled={disabledInc} name={'increment'} cb={incrementHandler}/>
                <Button disabled={disabledReset} name={'reset'} cb={resetHandler}/>
                <Button disabled={false} name={'setting'} cb={settingHandler}/>
            </BlockButtons>
        </DisplayContainer>
    )
}