import React from 'react'
import NewsCard from '../components/NewsCard.jsx'
import NavBar from './NavBar.jsx'

const News = () => {
  return (
    <>
    <NavBar />
    <div name='news' className='layout News pt-2 pb-32 px-8'>
    <h1 className='font-Croissant text-4xl text-center text-orange-600 font-bold m-7 md:text-5xl'>Latest Happenings</h1>
      <div className="newsComponents flex justify-evenly flex-wrap pt-10">
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>
    </div>
    </>
  )
}

export default News