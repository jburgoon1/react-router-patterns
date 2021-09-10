import React from 'react'
import {NavLink} from 'react-router-dom'

const NavBar = ({add}) =>{
return (
    <>
      <NavLink  to={`/colors/new`} className="navlinks">Add a new Color</NavLink>
  </>
)
}

export default NavBar;