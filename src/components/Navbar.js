import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
   <>
   
    <nav className="navbar">
      <div className='dd'>
        <Link className='h5'to={"/"} >البيت اللامع 🌟 </Link>
   
      
   </div>
      <Link id="na" to={"/"} >الصفحة الرئيسة</Link>
     
     
      </nav></>
  )
}

export default Navbar;