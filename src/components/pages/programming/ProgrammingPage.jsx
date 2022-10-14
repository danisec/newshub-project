import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchArticles } from '../../../features/programming/programmingSlice'
import { addToSaved, removeFromSaved } from '../../../features/saved/savedSlice'
import Skeleton from '../../UI/atoms/skeleton/Skeleton'
import Card from '../../UI/organisms/card/Card'

function ProgrammingPage() {
  const dispatch = useDispatch()

  const allArticles = useSelector((state) => state.programming.article)
  const loading = useSelector((state) => state.programming.loading)
  const savedItems = useSelector((state) => state.saved.savedItems)

  useEffect(() => {
    dispatch(fetchArticles())
  }, [dispatch])

  const handleAddToSaved = (item) => {
    dispatch(addToSaved(item))
  }

  const handleRemoveFromSaved = (item) => {
    dispatch(removeFromSaved(item))
  }

  return (
    <>
      <div className='layout my-8 md:my-12'>
        <h2 className='flex justify-center text-xl font-bold text-gray-900 md:text-2xl'>
          Programing News
        </h2>

        <div className='grid gap-2 sm:grid-cols-2 sm:gap-4 md:gap-8 lg:grid-cols-3 '>
          {allArticles.map((news, index) =>
            loading ? (
              <Skeleton key={index} />
            ) : (
              <Card
                key={index}
                srcImg={news?.urlToImage}
                altImg={news?.title}
                urlTitle={news?.url}
                title={news?.title}
                author={news?.author}
                description={news?.description}
                urlNews={news?.url}
                onClick={() => {
                  savedItems.find((item) => item.title === news.title)
                    ? handleRemoveFromSaved(news)
                    : handleAddToSaved(news)
                }}
                buttonName={
                  savedItems?.find((item) => item.title === news.title) ? (
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={1.5}
                      stroke='currentColor'
                      className='h-6 w-12 items-center text-red-700'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M3 3l1.664 1.664M21 21l-1.5-1.5m-5.485-1.242L12 17.25 4.5 21V8.742m.164-4.078a2.15 2.15 0 011.743-1.342 48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185V19.5M4.664 4.664L19.5 19.5'
                      />
                    </svg>
                  ) : (
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
                  )
                }
              />
            )
          )}
        </div>
      </div>
    </>
  )
}

export default ProgrammingPage
