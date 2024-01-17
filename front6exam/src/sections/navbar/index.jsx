import React from 'react'
import { Link } from 'react-router-dom'
import "./navbar.scss"
function Navbar() {
  return (
    <div className='navbar'>
      <div className='navbarHeader'>
        <h1>Selling.</h1>
      </div>
      <div className='navbarTitles'>
        <div >
          <Link to="/" className='navbarLink'> Home</Link>
        </div>
        <div >
          <Link to="/add" className='navbarLink'>add</Link>
        </div>
        <div >
          <Link to="/basket" className='navbarLink'>basket</Link>
        </div>
        <div >
          <Link to="/basket" className='navbarLink'>basket</Link>
        </div>
        <div >
          <Link to="/basket" className='navbarLink'>basket</Link>
        </div>
        <div >
          <Link to="/basket" className='navbarLink'>basket</Link>
        </div>
        <div >
          <Link to="/basket" className='navbarLink'>basket</Link>
        </div>
      </div>
      <div className='navbarIcon'>
        <i class="fa-solid fa-bars"></i>
      </div>
    </div>
  )
}

export default Navbar