import {FC, useEffect} from "react";
import {BlockButtons, BlockInput, DisplayContainer, DisplayOutput} from "../../common/styled-comps/styles";
import {Input} from "../independent-components/Input";
import {Button} from "../independent-components/Button";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../app/store_Redux_LS";
import {setCounterAC, setErrorAC, setMaxAC, setMiniAC} from "../../common/reducers-redux-LS/set-reducer-LS";
import {showOutputAC} from "../../common/reducers-redux-LS/show-reducer-LS";
import {setCurrentValueAC} from "../../common/reducers-redux-LS/output-reducer-LS";

type SetUnitedType = {}

export const Set_Redux_LS: FC<SetUnitedType> = (props) => {
    //
    const dispatch = useDispatch()
    const min = useSelector<RootStateType, number>(state => state.setReduxLS.minValue)
    const max = useSelector<RootStateType, number>(state => state.setReduxLS.maxValue)
    const error = useSelector<RootStateType, boolean>(state => state.setReduxLS.errorValue)
    //
    let validate = error ? '#a94c4c' : '#7dacea'
    //

    useEffect(()=>{
        if (min === max || min > max) {
            dispatch(setErrorAC(true))
        } else {
            dispatch(setErrorAC(false))
        }
    }, [min, max])
    const setMinHandler = (value: string) => {
        dispatch(setMiniAC(+value))
    }
    const setMaxHandler = (value: string) => {
        dispatch(setMaxAC(+value))
    }
    const setHandler = () => {
        dispatch(setCounterAC({min, max}))
        dispatch(showOutputAC())
        dispatch(setCurrentValueAC(min))
    }
    return (
        <DisplayContainer>
            <DisplayOutput>
                <BlockInput>
                    <div>min value:</div>
                    <Input value={min}
                           cb={setMinHandler}
                           validate={validate}/>
                </BlockInput>
                <BlockInput>
                    <div>max value:</div>
                    <Input value={max}
                           cb={setMaxHandler}
                           validate={validate}/>
                </BlockInput>
            </DisplayOutput>
            <BlockButtons>
                <Button disabled={error} name={'set'} cb={setHandler}/>
            </BlockButtons>
        </DisplayContainer>
    )
}