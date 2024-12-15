import {FC} from "react";
import {BlockButtons, DisplayContainer, DisplayOutput} from "../../common/styled-comps/styles";
import {Button} from "../independent-components/Button";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../app/store_Redux_LS";
import {incrementAC, resetAC} from "../../common/reducers-redux-LS/output-reducer-LS";
import {showSetAC} from "../../common/reducers-redux-LS/show-reducer-LS";

type OutputType = {}
export const Output_Redux_LS: FC<OutputType> = (props) => {
    //
    const dispatch = useDispatch()
    const min = useSelector<RootStateType, number>(state => state.setReduxLS.minValue)
    const max = useSelector<RootStateType, number>(state => state.setReduxLS.maxValue)
    const currentValue = useSelector<RootStateType, number>(state => state.outputReduxLS.currentValue)
    //
    const disabledIncrement = (currentValue === max || currentValue > max)
    const disabledReset = (currentValue === min)
    let color = (currentValue === max || currentValue > max) ? '#a94c4c' : 'inherit'
    //
    const incrementHandler = () => {
        dispatch(incrementAC(currentValue))
    }
    const resetHandler = () => {
        dispatch(resetAC(min))
    }
    const settingHandler = () => {
        dispatch(showSetAC())

    }
    //
    return (
        <DisplayContainer>
            <DisplayOutput color={color}>
                {currentValue}
            </DisplayOutput>
            <BlockButtons>
                <Button disabled={disabledIncrement} name={'increment'} cb={incrementHandler}/>
                <Button disabled={disabledReset} name={'reset'} cb={resetHandler}/>
                <Button disabled={false} name={'setting'} cb={settingHandler}/>
            </BlockButtons>
        </DisplayContainer>
    )
}