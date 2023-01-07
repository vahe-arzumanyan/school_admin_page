import React from "react";
import './App.scss';
import Home from "./component/Home";
import SchoolCategory from './component/schoolCategory/index'


// import {Switch, Route, NavLink, Link, Redirect} from 'react-router-dom';


const App = () => {
    return <div className='G-flex'>

        <SchoolCategory/>
        <div className='G-flex G-flex-column hh'>
            <Home/>
<div className='box'>as</div>
<div className='box'>as</div>
<div className='box'>as</div>
<div className='box'>as</div>
<div className='box'>as</div>
<div className='box'>as</div>
<div className='box'>as</div>
<div className='box'>as</div>

        </div>
    </div>
}

export default App;