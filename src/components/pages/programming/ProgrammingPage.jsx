import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchArticles } from '../../../features/programming/programmingSlice'
import Skeleton from '../../UI/atoms/skeleton/Skeleton'
import Card from '../../UI/organisms/card/Card'

function ProgrammingPage() {
  const dispatch = useDispatch()

  const allArticles = useSelector((state) => state.programming.article)
  const loading = useSelector((state) => state.programming.loading)
  useEffect(() => {
    dispatch(fetchArticles())
  }, [dispatch])
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
              />
            )
          )}
        </div>
      </div>
    </>
  )
}

export default ProgrammingPage
