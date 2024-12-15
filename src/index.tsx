import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {createGlobalStyle} from "styled-components";
import {Provider} from "react-redux";
import {store} from "./app/store_Redux_LS";
import {App_Redux_LS} from "./app/App_Redux_LS";

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
                {/*<App/>*/}
                {/*<App_UnitedCounter/>*/}
                <App_Redux_LS/>
            </Provider>

        </React.StrictMode>
    </>
);

//===================================================================


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
