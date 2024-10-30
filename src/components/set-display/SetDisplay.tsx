import {FC} from "react";
import {SetDisplayType} from "../types/types";
import {BlockButtons, BlockInput, DisplayContainer, DisplaySet} from "../styled-comps/styles";
import {Button} from "../independent-components/Button";
import {Input} from "../independent-components/Input";


export const SetDisplay: FC<SetDisplayType> = ({...props}) => {

    const setCounter = () => {
        console.log('set counter')
    }



    return (
        <DisplayContainer>
            <DisplaySet>
                <BlockInput>
                    <div>min value: </div>
                    <Input value={'min'} cb={()=>{}}/>
                </BlockInput>
                <BlockInput>
                    <div>max value: </div>
                    <Input value={'max'} cb={()=>{}}/>
                </BlockInput>
            </DisplaySet>
            <BlockButtons>
                <Button disabled={false} name={'SETTINGS'} cb={setCounter}/>
            </BlockButtons>
        </DisplayContainer>
    )
}