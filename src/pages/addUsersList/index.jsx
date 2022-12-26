import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {toDoActions} from '../../store/type-reducer/type';
import './style.scss';
import UsersListUi from "./UsersListUI";


const AddUsersList = () => {
  const [editUserInfo, setEditUserInfo] = useState(null);
  const [userInfo, setUserInfo] = useState(
    {
      firstName: '',
      lastName: '',
      email: '',
      gender: '',
      phone: ''
    }
  )

  const dispatch = useDispatch();
  let userList = useSelector(state => state.TodoListReducer.userList);

  useEffect(() => {
  }, [userList])


  const handleClick = () => {
    dispatch({type: toDoActions.CREATE_LIST, payload: userInfo})
    setUserInfo({
      ...userInfo,
      firstName: '',
      lastName: '',
      gender: '',
      email: '',
      phone: ''
    });
  }

  const handleSave = (user) => {
    if (editUserInfo || editUserInfo === 0) {
      dispatch({type: toDoActions.EDIT_LIST, payload: {userEdit: userInfo, index: editUserInfo}})
      setEditUserInfo(null)
      setUserInfo({
        firstName: '',
        lastName: '',
        email: '',
        gender: '',
        phone: ''
      })
    }
  }
  const editInfo = (user, key) => {
    setEditUserInfo(key)
    setUserInfo({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      gender: user.gender,
      phone: user.phone
    })
  }
  const handleChange = (e) => {
    setUserInfo({...userInfo, [e.target.name]: e.target.value})
  }


  return <div className='P-hhh'>
    <div className={'P-add-users'}>
      <label>
        <p>First Name</p>
        <input type='text' name='firstName' value={userInfo.firstName} onChange={handleChange}/>
      </label>
      <label>
        <p>Last Name</p>
        <input type='text' name='lastName' value={userInfo.lastName} onChange={handleChange}/>
      </label>
      <label>
        <p>email</p>
        <input type='email' name='email' value={userInfo.email} onChange={handleChange}/>
      </label>
      <label>
        <p>gender</p>
        <select className={'P-gender-option'} name='gender' value={userInfo.gender} onChange={handleChange}>
          <option>male</option>
          <option>female</option>
          <option>other</option>
        </select>
      </label>
      <label>
        <p>phone number</p>
        <input type='number' placeholder={'+374'} name='phone' value={userInfo.phone} onChange={handleChange}/>
      </label>
      <div className={'G-flex G-flex-column P-btn-users'}>
        <button onClick={handleClick}>add users</button>
        <button onClick={handleSave}>save info</button>
      </div>

    </div>
    <div className={'G-flex G-flex-row G-flex-wrap'}>
      {userList ? userList.map((user, index) => {
          return <UsersListUi key={index} index={index} user={user}
                              onClick={() => editInfo(user, index)}
          />
        })
        : null}
    </div>
  </div>
}

export default AddUsersList;


