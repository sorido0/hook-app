import React from 'react'
import {  NavLink } from 'react-router-dom'

export const NavBa = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-3">
        <div className="container-fluid">
           <NavLink className="navbar-brand" to="/">UseContext</NavLink>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">

              <NavLink
                className={  ({ isActive }) => `nav-link ${ isActive ? 'active' : '' }`}
                to='/'>
                Home
              </NavLink>
              <NavLink
                className={ ({ isActive }) => `nav-link ${ isActive ? 'active' : '' }`}
                to='login'>
                Login
              </NavLink>
              <NavLink
                className={ ({ isActive }) => `nav-link ${ isActive ? 'active' : '' }` }
                to='About'>
                About
              </NavLink>

            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
