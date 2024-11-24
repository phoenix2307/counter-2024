import {FC, useEffect, useState} from "react";
import {BlockButtons, DisplayContainer, DisplayOutput} from "../../common/styled-comps/styles";
import {Button} from "../independent-components/Button";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../app/store";
import {incrementAC, resetAC} from "../../common/reducers/outputDisplay-reducer";

type OutputDisplayWithReduxType = {}

export const OutputDisplay: FC<OutputDisplayWithReduxType> = (props) => {

    const dispatch = useDispatch()
    const min = useSelector<RootStateType, number>(state => state.setDisplay.minValue)
    const max = useSelector<RootStateType, number>(state => state.setDisplay.maxValue)
    const currentValue = useSelector<RootStateType, number>(state => state.outputDisplay.currentValue)

    // const [stopCounting, setStopCounting] = useState(false)
    let stopCounting = (currentValue === max || currentValue > max)
    let color = stopCounting ? 'red' : 'inherit'

    useEffect(() => {
        // setStopCounting(false)
        stopCounting = false
    }, [min, max])

    const incrementHandler = () => {
        dispatch(incrementAC(currentValue))
    }
    const resetHandler = () => {
        dispatch(resetAC(min))
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