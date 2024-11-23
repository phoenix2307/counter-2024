import {FC} from "react";
import {BlockButtons, BlockInput, DisplayContainer, DisplayOutput} from "../../common/styled-comps/styles";
import {Input} from "../independent-components/Input";
import {Button} from "../independent-components/Button";

type SetUnitedType = {
    min: number
    max: number
    setMInValue: (value: number) => void
    setMaxValue: (value: number) => void
    setCounter: () => void
    disabledSet: boolean
    validate: string
}

export const Set_United: FC<SetUnitedType> = (props) => {

    const {
        min, max, setMInValue,
        setMaxValue, setCounter, disabledSet, validate
    } = props

    const setMinHandler = (value: string) => {
        setMInValue(+value)
    }
    const setMaxHandler = (value: string) => {
        setMaxValue(+value)
    }
    const setHandler = () => {
        setCounter()
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
                <Button disabled={disabledSet} name={'set'} cb={setHandler}/>
            </BlockButtons>
        </DisplayContainer>
    )
}