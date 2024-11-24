import {FC, useEffect, useState} from "react";
import {BlockButtons, BlockInput, DisplayContainer, DisplaySet} from "../../common/styled-comps/styles";
import {Button} from "../independent-components/Button";
import {Input} from "../independent-components/Input";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../app/store";
import {setCounterAC, setErrorAC, setMaxAC, setMiniAC} from "../../common/reducers/setDisplay-reducer";

type SetDisplayWithReduxType = {}

export const SetDisplay: FC<SetDisplayWithReduxType> = (props) => {

    const dispatch = useDispatch()
    const minValue = useSelector<RootStateType, number>(state => state.setDisplay.minValue)
    const maxValue = useSelector<RootStateType, number>(state => state.setDisplay.maxValue)
    const error = useSelector<RootStateType, boolean>(state => state.setDisplay.errorValue)

    // const [error, setError] = useState(false)
    const [disabledBtn, setDisabledBtn] = useState(false)
    //
    // useEffect(()=>{
    //     if (minValue === maxValue || minValue > maxValue) {
    //         setError(true)
    //         setDisabledBtn(true)
    //     } else {
    //         setError(false)
    //         setDisabledBtn(false)
    //     }
    // },[minValue, maxValue])
    //
    useEffect(()=>{
        if (minValue === maxValue || minValue > maxValue) {
            dispatch(setErrorAC(true))
            setDisabledBtn(true)
        } else {
            dispatch(setErrorAC(false))
            setDisabledBtn(false)
        }
    },[minValue, maxValue])
    //
    const setCounterHandler = () => {
        dispatch(setCounterAC(minValue, maxValue))
    }
    //
    const minInputHandler = (value: string) => {
        dispatch(setMiniAC(+value))
    }
    const maxInputHandler = (value: string) => {
        dispatch(setMaxAC(+value))
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
                <Button disabled={disabledBtn} name={'SET'} cb={setCounterHandler}/>
            </BlockButtons>
        </DisplayContainer>
    )
}