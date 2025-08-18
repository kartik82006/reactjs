import React, { use, useState } from 'react'
import { useEffect } from 'react';
import { useLoaderData } from 'react-router';

function Github() {
  const data = useLoaderData();
//   useEffect(()=> {
//     fetch('https://api.github.com/users/hiteshchoudhary')
//     .then(response => response.json())
//     .then(data => {console.log(data),setData(data)})

//   },[])
    return (
    <>
      <div className='bg-gray-700 text-5xl rounded-xl text-center text-white font-bold m-2 py-5'>Github Followers:{data.followers}</div>
        <img src={data.avatar_url} alt="Git picture"  width="200" />
    </>
  )
}

export default Github

export const getGithubData = async()=>{
    const response = await fetch('https://api.github.com/users/hiteshchoudhary');
    return response.json();
}