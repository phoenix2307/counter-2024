import {AppWrapper} from "./components/styled-comps/styles";
import {Output_United} from "./components-for-united/Output_United";
import {useEffect, useState} from "react";

function App_UnitedCounter() {

    const [currentValue, setCurrentValue] = useState(0)
    const [min, setMin] = useState(0)
    const [max, setMax] = useState(3)
    const [disabledInc, setDisabledInc] = useState(false)
    const [disabledReset, setDisabledReset] = useState(false)


    // for Output
    useEffect(() => {
        if ((currentValue === max || currentValue > max)) {
            setDisabledInc(true)
        } else {
            setDisabledInc(false)
        }
    }, [currentValue])

    const incrementCounter = () => {
        setDisabledInc(true)
        setCurrentValue(currentValue + 1)
        setDisabledReset(false)
    }

    const resetCounter = () => {
        setCurrentValue(min)
        setDisabledReset(true)
        setDisabledInc(false)
    }

    const settingCounter = () => {

    }
    // for Set

    return (
        <AppWrapper>
            <Output_United currentValue={currentValue}
                           incrementCounter={incrementCounter}
                           resetCounter={resetCounter}
                           settingCounter={settingCounter}
                           disabledInc={disabledInc}
                           disabledReset={disabledReset}
            />
        </AppWrapper>
    );
}

export default App_UnitedCounter;
