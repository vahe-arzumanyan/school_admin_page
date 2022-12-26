import React from "react";
import './App.scss';

import Home from "./component/Home";
import SchoolCategory from './component/schoolCategory/index'


// import {Switch, Route, NavLink, Link, Redirect} from 'react-router-dom';


const App = () => {
  return <div className={'G-flex'}>
    <SchoolCategory />
    <Home />

  </div>
}

export default App;