import React from "react";
import './style.scss';
import {NavLink} from 'react-router-dom';


const SchoolCategory = () => {
    return <div className='P-school-action-title G-flex G-flex-column G-align-center'>
        <div className='P-admin-action-title G-flex G-center'>
            <p>Administration Action</p>
        </div>

        <ul className='P-category-ul'>
            <li>
                <NavLink to={'/School'}>Schools</NavLink>
            </li>
            <li>
                <NavLink to={'/Teacher'}>Teachers</NavLink>
            </li>
            <li>
                <NavLink to={'/Pupil'}>Pupils</NavLink>
            </li>
        </ul>


    </div>
}

export default SchoolCategory;