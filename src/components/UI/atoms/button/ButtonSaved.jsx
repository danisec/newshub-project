import React from 'react'

function ButtonSaved({ buttonName, onClick }) {
  return (
    <>
      <button
        className='w-12 rounded-md bg-slate-100 font-medium text-white hover:bg-slate-200/80'
        aria-labelledby='save'
        onClick={onClick}
      >
        {buttonName}
      </button>
    </>
  )
}

export default ButtonSaved
