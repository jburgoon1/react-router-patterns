import React from 'react'
import {NavLink} from 'react-router-dom'

const NavBar = ({dog}) =>{
return (
    <>
      <NavLink  to={`/dogs/${dog}`} className="navlinks" value={dog}>{dog}</NavLink>
      
      
   

  </>
)
}

export default NavBar;