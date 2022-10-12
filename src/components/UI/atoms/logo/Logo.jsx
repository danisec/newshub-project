import React from 'react'
import NewsHubLogo from '../../../../assets/logo/newshub.png'

function Logo({ classLogo }) {
  return (
    <>
      <img className={`${classLogo}`} src={NewsHubLogo} alt='NewsHub' />
    </>
  )
}

export default Logo
