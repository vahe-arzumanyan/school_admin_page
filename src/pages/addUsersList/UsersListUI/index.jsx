import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import './style.scss'
import {toDoActions} from "../../../store/type-reducer/type";



const UsersListUi = ({index, user, onClick}) =>{


    const dispatch = useDispatch();
    const deleteList = (index) => {
        dispatch({type: toDoActions.REMOVE_LIST, payload:index
        })
    }


    return<div>
        <ul className={'P-userInfo'}>
            <div className={'G-flex G-justify-between'}>
                <div onClick={onClick}>edit</div>
                <div  onClick={() => deleteList(index)}>x</div>
            </div>
            <li className={'P-firstName'}>first name_{user.firstName}</li>
            <li className={'P-lastName'}>last name_{user.lastName}</li>
            <li className={'P-email'}>email_{user.email}</li>
            <li className={'P-gender'}>gender_{user.gender}</li>
            <li className={'P-phone'}>phone_{user.phone}</li>
        </ul>

    </div>
}

export default UsersListUi