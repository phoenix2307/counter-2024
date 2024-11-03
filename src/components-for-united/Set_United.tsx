import {FC} from "react";
import {BlockButtons, BlockInput, DisplayContainer, DisplayOutput} from "../components/styled-comps/styles";
import {Input} from "../components/independent-components/Input";
import {Button} from "../components/independent-components/Button";

type SetUnitedType = {
    min: number
    max: number
    setMInValue: (value:number) => void
    setMaxValue: (value:number) => void
    setCounter: () => void
}

export const Set_United: FC<SetUnitedType> = (props) => {

    const {min, max, setMInValue, setMaxValue, setCounter} = props

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
                    <Input value={min} cb={setMinHandler}/>
                </BlockInput>
                <BlockInput>
                    <div>max value:</div>
                    <Input value={max} cb={setMaxHandler}/>
                </BlockInput>
            </DisplayOutput>
            <BlockButtons>
                <Button disabled={false} name={'set'} cb={setHandler}/>
            </BlockButtons>
        </DisplayContainer>
    )
}