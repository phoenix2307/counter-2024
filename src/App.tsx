import React, {useState} from 'react';
import './App.css';
import {SetDisplay} from "./components/set-display/SetDisplay";
import {OutputDisplay} from "./components/output-display/OutputDisplay";

function App() {
    const [currentValue, setCurrentValue] = useState(0)

    const incrementCounter = () => {
        const newValue = currentValue + 1
        setCurrentValue(newValue)
    }
    const resetCounter = () => {
        setCurrentValue(0)
    }

    return (
        <div className="App">
            <SetDisplay/>
            <OutputDisplay currentValue={currentValue} increment={incrementCounter} reset={resetCounter}/>
        </div>
    );
}

export default App;
