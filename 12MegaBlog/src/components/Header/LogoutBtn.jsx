import React from 'react'
import { useDispatch } from 'react-redux'
import {logout} from '../../store/authSlice'
import authService from '../../appwrite/auth'

function LogoutBtn() {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    authService.logout().then(()=>{
      dispatch(logout()); // its just a state change in redux store
    })
  }
  return (
    <button 
    className='bg-red-500 text-white px-4 py-2 rounded' 
    onClick={logoutHandler}>
      Logout
    </button>
  )
}


export default LogoutBtn;