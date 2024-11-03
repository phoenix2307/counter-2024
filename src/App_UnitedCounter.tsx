import {AppWrapper} from "./components/styled-comps/styles";
import {Output_United} from "./components-for-united/Output_United";
import {useEffect, useState} from "react";
import {Set_United} from "./components-for-united/Set_United";

function App_UnitedCounter() {

    const [currentValue, setCurrentValue] = useState(0)
    const [min, setMin] = useState(0)
    const [max, setMax] = useState(3)
    const [disabledInc, setDisabledInc] = useState(false)
    const [disabledReset, setDisabledReset] = useState(false)
    const [showOutput, setShowOutput] = useState(true)
    const [disabledSet, setDisabledSet] = useState(false)
    const [validate, setValidate] = useState('#7dacea')

    //==================== FOR OUTPUT ============================
    const colorOutput = (currentValue === max || currentValue > max) ? 'red' : '#7dacea'
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
        setShowOutput(false)
    }
    //======================== FOR SET ============================
    useEffect(() => {
        if (min === max || min > max) {
            setDisabledSet(true)
            setValidate('#a94c4c')
        } else {
            setDisabledSet(false)
            setValidate('#7dacea')
        }
    }, [min, max])

    const setMInValue = (value: number) => {
        setMin(value)
    }

    const setMaxValue = (value: number) => {
        setMax(value)
    }

    const setCounter = () => {
        setCurrentValue(min)
        setShowOutput(true)
    }


    return (
        <AppWrapper>
            {
                showOutput
                    ? <Output_United currentValue={currentValue}
                                     incrementCounter={incrementCounter}
                                     resetCounter={resetCounter}
                                     settingCounter={settingCounter}
                                     disabledInc={disabledInc}
                                     disabledReset={disabledReset}
                                     color={colorOutput}
                    />
                    : <Set_United
                        min={min}
                        max={max}
                        setMInValue={setMInValue}
                        setMaxValue={setMaxValue}
                        setCounter={setCounter}
                        disabledSet={disabledSet}
                        validate={validate}
                    />
            }

        </AppWrapper>
    );
}

export default App_UnitedCounter;
