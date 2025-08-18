import React from 'react'
import { useParams } from 'react-router';

function User() {
  const { userid } = useParams();
  return (
    <div className='bg-gray-700 text-5xl rounded-xl text-center text-white font-bold m-2 py-5'>User:{userid}</div>
  )
}

export default User