import React from 'react'

function ButtonReadMore({ buttonName }) {
  return (
    <>
      <button className='h-12 w-28 rounded-md bg-black font-medium text-white hover:bg-gray-800'>
        {buttonName}
      </button>
    </>
  )
}

export default ButtonReadMore
