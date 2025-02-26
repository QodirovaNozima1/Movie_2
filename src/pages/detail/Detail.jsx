import React from 'react'
import { useGetSingleMovieImagesQuery, useGetSingleMovieQuery } from '../../redux/api/movie.api'
import { useParams } from 'react-router-dom'

const Detail = () => {
    const {id} = useParams()
    const {data} = useGetSingleMovieQuery(id)
    const {data: images} = useGetSingleMovieImagesQuery(id)
    
  return (
    <div className='container flex flex-col p-2 mb-10 gap-10'>
        <div>
            <h1 className='text-3xl text-white italic'>{data?.title}</h1>
        </div>
        <div className='sm:w-[170]'>
            <img className='sm:w-[180]' src={import.meta.env.VITE_IMAGE_URL + data?.backdrop_path} alt="" />
        </div>
        
        <div className='grid grid-cols-4 gap-1 sm: grid-cols-2'>
            {
                images?.backdrops?.slice(0, 8)?.map((image) => (
                    <img key={image.file_path} className='w-[300px]' src={import.meta.env.VITE_IMAGE_URL + image.file_path} alt="" />
                ))
            }
        </div>
    </div>
  )
}

export default Detail