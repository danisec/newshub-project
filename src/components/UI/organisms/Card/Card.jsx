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
  onClick,
  buttonName,
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

            <ButtonSaved buttonName={buttonName} onClick={onClick} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Card
