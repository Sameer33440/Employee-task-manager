import React, { useState } from 'react'

const Header = (props) => {
  const [username,setUsername]=useState('');
  // if(!data)
  // {
  //   setUsername('admin')
  // }
  // else{
  //   setUsername(data.firstName);
  // }
 // console.log(data)
 const logOutUser=()=>
 {
  localStorage.setItem('loggedInUser',' ')
  props.changeUser('')// indirect reload
  console.log(props.changeUser)

   //window.location.reload();
 }
  return (
    <div className='flex items-end justify-between mt-2 ' >
      <h1 className="text-2xl text-cyan-50 font-urbanist">Hello 👋 <br/>  <span className ="text-3xl font-">User</span > </h1>
      <button onClick={logOutUser}className='bg-red-600 rounded-lg text-lg font-medium text-white px-3 py-2 rounded-sm hover:scale-105 hover:shadow-lg'>  Log Out 📴</button>
    </div>
  )
}

export default Header
