import React from 'react';
import './App.css';
import {SetDisplay} from "../components/set-display/SetDisplay";
import {OutputDisplay} from "../components/output-display/OutputDisplay";
import {AppWrapper} from "../common/styled-comps/styles";


function App() {

    // const [currentValue, setCurrentValue] = useState(0)
    // const [output, setOutput] = useState(false)
    // const [min, setMin] = useState(0)
    // const [max, setMax] = useState(5)

    /*const [stopCounting, setStopCounting] = useState(false)

    let color = stopCounting ? 'red' : 'inherit'

    useEffect(() => {
        setStopCounting(false)
    }, [min, max])*/

  /*  const incrementCounter = () => {
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
    }*/

    return (

        <AppWrapper>

           {/* <SetDisplay setCounter={setCounter}
                        min={min}
                        max={max}/>
            <OutputDisplay
                currentValue={currentValue}
                increment={incrementCounter}
                reset={resetCounter}
                color={color}
                min={min}
                max={max}
            />*/}

            {/*============ With REDUX =============================*/}

            <SetDisplay/>
            <OutputDisplay/>

        </AppWrapper>
    );
}

export default App;
