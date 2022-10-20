import React, { useState, useEffect } from 'react'

function ButtonBackToTop() {
  const [changeButton, setChangeButton] = useState(false)

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  const handleToBottom = () => {
    window.scrollTo({
      top: 300,
      behavior: 'smooth',
    })
  }

  const handleChangeButton = () => {
    window.scrollY > 300 ? setChangeButton(true) : setChangeButton(false)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleChangeButton)
    return () => {
      window.removeEventListener('scroll', handleChangeButton)
    }
  }, [])

  return (
    <>
      <button
        className='fixed bottom-4 right-4 hidden rounded-md bg-gray-800 p-2 text-white transition-all duration-300 ease-in-out hover:bg-black sm:block'
        type='button'
        onClick={window.scrollY < 300 ? handleToBottom : handleBackToTop}
      >
        {changeButton ? (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='h-5 w-5 md:h-6 md:w-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75'
            />
          </svg>
        ) : (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='h-5 w-5 md:h-6 md:w-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75'
            />
          </svg>
        )}
      </button>
    </>
  )
}

export default ButtonBackToTop
