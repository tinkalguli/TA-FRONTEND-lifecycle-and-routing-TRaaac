import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from "react-router-dom";
import './styles/index.css';
import App from './components/App';
import User from "./components/User";

ReactDOM.render(
  <BrowserRouter>
    <Route path="/users/:username" component={User}/>
    <Route path="/" exact>
      <App />
    </Route>
  </BrowserRouter>,
  document.getElementById('root')
);