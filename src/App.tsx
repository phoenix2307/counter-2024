import React, {useEffect, useState} from 'react';
import './App.css';
import {SetDisplay} from "./components/set-display/SetDisplay";
import {OutputDisplay} from "./components/output-display/OutputDisplay";
import {AppWrapper} from "./components/styled-comps/styles";


function App() {
    const [currentValue, setCurrentValue] = useState(0)
    const [stopCounting, setStopCounting] = useState(false)
    // const [output, setOutput] = useState(false)
    const [min, setMin]=useState(0)
    const [max, setMax]=useState(5)


    const color = stopCounting ? 'red' : 'inherit'

    const incrementCounter = () => {
        const newValue = currentValue + 1
        setCurrentValue(newValue)
        newValue === max ? setStopCounting(true) : setStopCounting(false)
    }
    const resetCounter = () => {
        setCurrentValue(min)
        setStopCounting(false)
    }

    const setCounter = (minValue: number, maxValue: number) => {
        setMin(minValue)
        setMax(maxValue)
        setCurrentValue(minValue)
        // setOutput(true)
    }

    return (

        <AppWrapper>

{/*            {
                output
                    ? <OutputDisplay
                        currentValue={currentValue}
                        increment={incrementCounter}
                        reset={resetCounter}
                        color={numberColor}
                        min={min}
                        max={max}
                    />
                    : <SetDisplay setCounter={setCounter}
                                  min={min}
                                  max={max}/>

            }*/}
            <SetDisplay setCounter={setCounter}
                        min={min}
                        max={max}/>
            <OutputDisplay
                currentValue={currentValue}
                increment={incrementCounter}
                reset={resetCounter}
                color={color}
                min={min}
                max={max}
            />
        </AppWrapper>
    );
}

export default App;
