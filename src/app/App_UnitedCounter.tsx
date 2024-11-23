import {AppWrapper} from "../common/styled-comps/styles";
import {Output_United} from "../components/components-for-united/Output_United";
import {useEffect, useState} from "react";
import {Set_United} from "../components/components-for-united/Set_United";

function App_UnitedCounter() {

    const [currentValue, setCurrentValue] = useState(0)
    const [min, setMin] = useState(0)
    const [max, setMax] = useState(3)
    const [disabledInc, setDisabledInc] = useState(false)
    const [disabledReset, setDisabledReset] = useState(false)
    const [showOutput, setShowOutput] = useState(true)
    const [disabledSet, setDisabledSet] = useState(false)
    const [validate, setValidate] = useState('#7dacea')

    //==================== LOCAL STORAGE =============================
    useEffect(() => {
        const storedMin = localStorage.getItem('min value') || '0'
        const storedMax = localStorage.getItem('max value') || '3'

        setMin(+storedMin)
        setMax(+storedMax)
        setCurrentValue(+storedMin)
    }, [])

    //==================== FOR OUTPUT ============================
    const colorOutput = (currentValue === max || currentValue > max) ? 'red' : '#7dacea'
    useEffect(() => {
        setDisabledInc(currentValue >= max)
        /*        if ((currentValue === max || currentValue > max)) {
                    setDisabledInc(true)
                } else {
                    setDisabledInc(false)
                }*/
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
        const isInvalid = min >= max
        setDisabledSet(isInvalid)
        setValidate(isInvalid ? '#a94c4c' : '#7dacea')
        /*        if (min === max || min > max) {
                    setDisabledSet(true)
                    setValidate('#a94c4c')
                } else {
                    setDisabledSet(false)
                    setValidate('#7dacea')
                }*/
    }, [min, max])

    const setMInValue = (value: number) => {
        setMin(value)

    }

    const setMaxValue = (value: number) => {
        setMax(value)

    }

    const setCounter = () => {
        localStorage.setItem('min value', min.toString())
        localStorage.setItem('max value', max.toString())
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
