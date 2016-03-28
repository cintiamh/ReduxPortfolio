import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App';

render (
    <div>
        <App />
    </div>,
    document.getElementById('root')
);