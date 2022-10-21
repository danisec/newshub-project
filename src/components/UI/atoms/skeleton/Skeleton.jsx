import React from 'react'

function Skeleton() {
  return (
    <>
      <div role='status' className='mt-10 animate-pulse'>
        <div className='flex h-80 w-full items-center justify-center rounded bg-gray-100 sm:w-80'></div>

        <span className='sr-only'>Loading...</span>
      </div>
    </>
  )
}

export default Skeleton
