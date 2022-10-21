import React from 'react'
import Logo from '../../atoms/logo/Logo'

function Footer() {
  const getYear = () => {
    const date = new Date()
    const year = date.getFullYear()

    return year
  }

  return (
    <div className='layout bg-slate-100/60 shadow-sm shadow-gray-100'>
      <div className='flex flex-wrap items-center justify-center gap-4 py-6'>
        <div>
          <Logo classLogo='h-auto w-32' />
        </div>

        <div>
          <p className='text-sm font-normal text-gray-700 md:text-base'>
            {`© ${getYear()} - All rights reserved`}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
