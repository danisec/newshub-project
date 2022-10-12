import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

function LinkNavbar() {
  const location = useLocation()
  const { pathname } = location
  const splitLocation = pathname.split('/')

  return (
    <>
      <li>
        <NavLink
          className={
            splitLocation[1] === ''
              ? 'active'
              : 'inactive link link-underline link-underline-black text-black'
          }
          to='/'
        >
          Indonesia
        </NavLink>
      </li>

      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? 'active'
              : 'inactive link link-underline link-underline-black text-black'
          }
          to='/programming'
        >
          Programming
        </NavLink>
      </li>

      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? 'active'
              : 'inactive link link-underline link-underline-black text-black'
          }
          to='/covid'
        >
          COVID-19
        </NavLink>
      </li>

      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? 'active'
              : 'inactive link link-underline link-underline-black text-black'
          }
          to='/saved'
        >
          Saved
        </NavLink>
      </li>
    </>
  )
}

export default LinkNavbar
