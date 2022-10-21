import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import LinkNavbar from '../../atoms/link-navbar/LinkNavbar'
import Search from '../../atoms/search/Search'
import ButtonNavbar from '../../atoms/button/ButtonNavbar'
import Logo from '../../atoms/logo/Logo'

function Navbar() {
  const [navColor, setNavColor] = useState('bg-transparent')

  const changeNavbarColor = () => {
    window.scrollY > 10
      ? setNavColor('bg-white')
      : setNavColor('bg-transparent')
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNavbarColor)
    return () => {
      window.removeEventListener('scroll', changeNavbarColor)
    }
  }, [])

  return (
    <>
      <div
        className={`layout sticky top-0 z-50 py-6 shadow-sm shadow-gray-200/90 transition-all duration-300 ease-in-out ${navColor}`}
      >
        <div className='hidden md:block'>
          <NavLink to='/'>
            <Logo classLogo='h-auto w-32' />
          </NavLink>

          <div className='flex flex-wrap items-center justify-between gap-8'>
            <div>
              <ul className='flex gap-8 overflow-x-auto py-3 md:flex-row md:items-center'>
                <LinkNavbar />
              </ul>
            </div>

            <div>
              <Search />
            </div>
          </div>
        </div>

        <div className='flex items-center justify-between md:hidden'>
          <NavLink to='/'>
            <Logo classLogo='h-auto w-28' />
          </NavLink>

          <ButtonNavbar />
        </div>
      </div>
    </>
  )
}

export default Navbar
