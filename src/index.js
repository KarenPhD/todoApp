import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "./context/todoContext";
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
    <React.StrictMode>
        <Provider>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);