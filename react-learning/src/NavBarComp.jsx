import React from 'react'
import {Link} from 'react-router-dom'

const NavBarComp = () => {
  return (
    <div className='NavBarComp-Container'>
        <ul>
            <Link to="/"> <li>Home</li></Link>
            <Link to="/about"><li>About</li></Link>
            <Link to="/blog"><li>Blog</li></Link>
            <Link to="/contact"> <li>Contact Us</li></Link>
           
        </ul>
    </div>
  )
}

export default NavBarComp