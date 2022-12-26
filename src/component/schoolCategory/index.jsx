import React from "react";
import './style.scss';
import {NavLink} from 'react-router-dom';


const SchoolCategory = () => {
    return <div className={'P-school-action-title G-flex G-flex-column G-align-center'}>
        <div className='P-admin-action-title G-flex G-center'>
            <p>Administration Action</p>
        </div>

        <ul className='P-category-ul'>
            <li>
                <NavLink to={'/School'}><a>Schools</a></NavLink>
            </li>
            <li>
                <NavLink to={'/Teacher'}><a>Teachers</a></NavLink>
            </li>
            <li>
                <NavLink to={'/Pupil'}><a>Pupils</a></NavLink>
            </li>
        </ul>


    </div>
}

export default SchoolCategory;