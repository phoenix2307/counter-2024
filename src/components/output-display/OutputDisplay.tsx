import {FC} from "react";
import {OutputDisplayType} from "../types/types";
import {BlockButtons, DisplayContainer, DisplayOutput} from "../styled-comps/styles";
import {Button} from "../independent-components/Button";

export const OutputDisplay: FC<OutputDisplayType> = (props) => {

    const {currentValue, increment, reset} = props

    const incrementCounter = () => {
        increment()
    }
    const resetCounter = () => {
        reset()
    }

    return (
        <DisplayContainer>
            <DisplayOutput>
                {currentValue}
            </DisplayOutput>
            <BlockButtons>
                <Button disabled={false} name={'INCREMENT'} cb={incrementCounter}/>
                <Button disabled={false} name={'RESET'} cb={resetCounter}/>
            </BlockButtons>

        </DisplayContainer>
    )
}