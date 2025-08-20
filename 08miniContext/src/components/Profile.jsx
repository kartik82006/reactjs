import React from 'react'
import UserContext from '../context/UserContext'
import { useContext } from 'react'



function Profile() {
    const {user} = useContext(UserContext)
    if(!user) return(
        <div>
            <h2>Please login to view your profile</h2>
        </div>
    )
    return <div>Welcome {user.username}</div>
}

export default Profile