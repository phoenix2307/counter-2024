import React, {useState} from 'react';
import './App.css';
import {SetDisplay} from "./components/set-display/SetDisplay";
import {OutputDisplay} from "./components/output-display/OutputDisplay";
import styled from "styled-components";

const AppWrapper = styled.div`
  width: 100%;
  height: 100vh;
  padding: 2rem;
  background-color: #182a36;
  //color: #b3d4fc;
`

function App() {
    const [currentValue, setCurrentValue] = useState(0)
    const [stopCounting, setStopCounting] = useState(false)

    const incrementCounter = () => {
        const newValue = currentValue + 1
        setCurrentValue(newValue)
    }
    const resetCounter = () => {
        setCurrentValue(0)
    }

    return (
        <AppWrapper>
            {/*<SetDisplay/>*/}
            <OutputDisplay
                currentValue={currentValue}
                increment={incrementCounter}
                reset={resetCounter}
                stopCounting={stopCounting}
            />
        </AppWrapper>
    );
}

export default App;
