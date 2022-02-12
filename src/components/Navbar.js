import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {

 const handleLogOut = () => {
  
   localStorage.removeItem('usename')

 }
 const userData =  localStorage.getItem('usename')
 
  return (
    <nav className='navbar'>
      <div className='nav-center'>

      <div className='nav-header'>
        <Link to='/'>
          <h1 className='nav-title-main'>Github  <span className='nav-title-second'>Tranding</span></h1>
        </Link>
        </div>
        <div className='links-container'>
        <ul className='nav-links'>
          <li>
            <Link to='/'>home</Link>
          </li>
          <li>
            <Link to='/top'>Top user(country)</Link>
          </li>
          <li>
          <Link to='/repo'>Top user(repo)</Link>
          </li>
          <li>
          <Link to='/about'>Data visualization</Link>
          </li>
        </ul>
        </div>
        <div className='social-icons'>
{
  userData ?<Link to='/login'>  <button  onClick={handleLogOut} className='btn'>Logout</button></Link> :<Link to='/login'>  <button className='btn'>login</button></Link>
        
}
       
        </div>
      </div>
    </nav>
  )
}
