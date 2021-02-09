import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import {BrowserRouter, Route} from "react-router-dom";
import Battle from "./components/battle/App";
import Popular from "./components/popular/App";
import Header from "./components/Header";

ReactDOM.render(
  <BrowserRouter>
    <Header />
    <Route path="/popular">
      <Popular />
    </Route>
    <Route path="/battle">
      <Battle />
    </Route>
  </BrowserRouter>,
  document.getElementById('root')
);