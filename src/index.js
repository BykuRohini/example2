import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Main from './Pro2/Main';
import {Provider} from './Pro2/Usecontext';
import reportWebVitals from './reportWebVitals';
import Useref from './Useref';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
           {/* <Provider>
            <Main/>
          </Provider>*/}
          <Useref/>
      </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
