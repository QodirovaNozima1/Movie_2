import React from 'react'
import { useGetMoviesQuery } from '../../redux/api/movie.api'
import Movies from '../../components/movies/Movies'
import Hero from '../../components/hero/Hero'

const Home = () => {
  const {data} = useGetMoviesQuery({page:1, without_genres: "18,36,10749"})
  
  
  return (
    <div className='container'>
      <Hero/>
      <Movies data={data}/>
    </div>
  )
}

export default Home