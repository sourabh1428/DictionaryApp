import React from 'react'
import { useNavigate } from 'react-router'
import '../Assets/NavBar.css'

const NavBar = () => {

    const navigate=useNavigate();

  return (
    <div className='nav-bar'>
       <div>
        <h1>My Dictionary</h1>
       </div>
       
        <div>
        <button className='nav-btn' onClick={()=>navigate('/')} >Home</button>
        <button className='nav-btn' onClick={()=>navigate('/history')} >History</button>
        </div>
    </div>
  )
}

export default NavBar