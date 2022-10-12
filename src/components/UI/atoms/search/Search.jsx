import React from 'react'

function Search() {
  return (
    <>
      <form className='flex items-center'>
        <div className='relative flex w-full'>
          <input
            type='text'
            className='block w-60 rounded-full border border-gray-200 bg-white p-2 pl-4 pr-12 text-base font-normal text-gray-700 focus:border-gray-500 focus:outline-none
            focus:ring-1 focus:ring-gray-500 lg:w-72'
            placeholder='Search...'
          />

          <button
            className='-ml-10 hover:text-gray-600'
            aria-labelledby='search'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='h-6 w-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
              />
            </svg>
          </button>
        </div>
      </form>
    </>
  )
}

export default Search
