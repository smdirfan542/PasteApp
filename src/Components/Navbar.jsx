import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{display:'flex', justifyContent:'space-between',gap:'1rem'}}>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/paste'}>Paste</NavLink>
    </div>
  )
}

export default Navbar