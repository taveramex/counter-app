import React from 'react'
import ReactDOM from 'react-dom/client';
import { App } from './components/App';
import '../hackishStylo.css';

ReactDOM.createRoot( document.getElementById('root')).render(
    <React.StrictMode>
        <App title={123} subtitle={false} />
    </React.StrictMode>
);