import {FC} from "react";
import {OutputDisplayType} from "../../common/types/types";
import {BlockButtons, DisplayContainer, DisplayOutput} from "../../common/styled-comps/styles";
import {Button} from "../independent-components/Button";

export const OutputDisplay: FC<OutputDisplayType> = (props) => {

    const {currentValue, increment, reset, min, max, color} = props

    const incrementHandler = () => {
        increment()
    }
    const resetHandler = () => {
        reset()
    }
    const disabledIncrement = (currentValue === max || currentValue > max)
    const disabledReset = (currentValue === min)

    return (

        <DisplayContainer>
            <DisplayOutput color={color}>
                {currentValue}
            </DisplayOutput>
            <BlockButtons>
                <Button disabled={disabledIncrement} name={'INCREMENT'} cb={incrementHandler}/>
                <Button disabled={disabledReset} name={'RESET'} cb={resetHandler}/>
            </BlockButtons>

        </DisplayContainer>
    )
}