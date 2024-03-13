import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import {store} from "./redux/store.jsx";
import {Provider} from "react-redux";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <NavBar/>
                <App/>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
)
