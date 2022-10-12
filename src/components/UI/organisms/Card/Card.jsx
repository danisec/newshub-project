import React from 'react'
import ButtonNewsPage from '../../atoms/button/buttonReadMore'
import ButtonSaved from '../../atoms/button/ButtonSaved'

function Card({
  srcImg,
  altImg,
  urlTitle,
  title,
  author,
  description,
  urlNews,
}) {
  return (
    <>
      <div className='mt-10 bg-white shadow-2xl shadow-gray-100 hover:shadow-2xl hover:shadow-gray-200'>
        <div>
          <img className='h-48 w-full object-cover' src={srcImg} alt={altImg} />
        </div>

        <div className='px-4 pb-4'>
          <a href={urlTitle} target='_blank'>
            <h3 className='mt-4 text-lg font-semibold text-gray-900 hover:text-blue-500'>
              {title}
            </h3>
          </a>

          <div className='mt-2'>
            <span className='text-sm font-medium text-gray-700'>{author}</span>

            <p className='mt-2 text-sm font-normal text-gray-900'>
              {description}
            </p>
          </div>

          <div className='mt-8 flex justify-between'>
            <a href={urlNews} target='_blank'>
              <ButtonNewsPage buttonName='Read More' />
            </a>

            <ButtonSaved
              buttonName={
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='h-6 w-12 items-center text-black'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z'
                  />
                </svg>
              }
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Card
