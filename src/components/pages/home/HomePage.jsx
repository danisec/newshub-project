import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchNews } from '../../../features/home/homeSlice'
import Skeleton from '../../UI/atoms/skeleton/Skeleton'
import Card from '../../UI/organisms/card/Card'

function HomePage() {
  const dispatch = useDispatch()

  const allNews = useSelector((state) => state.home.article)
  const loading = useSelector((state) => state.home.loading)

  useEffect(() => {
    dispatch(fetchNews())
  }, [dispatch])

  return (
    <>
      <div className='layout my-8 md:my-12'>
        <h2 className='flex justify-center text-xl font-bold text-gray-900 md:text-2xl'>
          Indonesia News
        </h2>

        <div className='grid gap-2 sm:grid-cols-2 sm:gap-4 md:gap-8 lg:grid-cols-3'>
          {allNews.map((news, index) =>
            loading ? (
              <div className='mt-10'>
                <Skeleton key={index} />
              </div>
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
              />
            )
          )}
        </div>
      </div>
    </>
  )
}

export default HomePage
