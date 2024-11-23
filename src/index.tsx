import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app/App';
import reportWebVitals from './reportWebVitals';
import {createGlobalStyle} from "styled-components";
import App_UnitedCounter from "./app/App_UnitedCounter";
import {Provider} from "react-redux";
import {store} from "./app/store";

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Consolas;
  }
`
//============= WITHOUT REDUX ======================================

// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );
// root.render(
//     <>
//         <Global/>
//         <React.StrictMode>
//             <App />
//             {/*<App_UnitedCounter/>*/}
//         </React.StrictMode>
//     </>
//
// );

//=============== WITH REDUX =========================================

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <>
        <Global/>
        <React.StrictMode>
            <Provider store={store}>
                <App/>
            </Provider>

        </React.StrictMode>
    </>
);

//===================================================================


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
