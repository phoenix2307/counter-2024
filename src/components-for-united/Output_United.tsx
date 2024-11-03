import {FC, useState} from "react";
import {BlockButtons, DisplayContainer, DisplayOutput} from "../components/styled-comps/styles";
import {Button} from "../components/independent-components/Button";

type OutputType = {
    currentValue: number
    incrementCounter: () => void
    resetCounter: () => void
    settingCounter: () => void
    disabledInc: boolean
    disabledReset: boolean
}
export const Output_United: FC<OutputType> = (props) => {
    const {
        currentValue, incrementCounter,
        resetCounter, settingCounter,
        disabledInc, disabledReset
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
            <DisplayOutput>
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