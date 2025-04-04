import React from 'react'
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { toggleSave } from "../../redux/features/save.slice";
import "./Movies.css"

const Movies = ({data}) => {
  const dispatch = useDispatch();
  const saved = useSelector((state) => state.saved.value);

  const handleToggleSave = (movie) => {
    dispatch(toggleSave(movie));
  };
  
  return (
    <div className='movie__wrapper'>
    {
      data?.results?.map((movie)=> (
        <div className='rounded-lg overflow-hidden relative' key={movie.id}>
          {saved?.some((item) => item.id === movie.id) ? (
            <FaBookmark
              className="text-white absolute top-4 right-4 text-[22px] font-medium cursor-pointer"
              onClick={() => handleToggleSave(movie)}
            />
          ) : (
            <FaRegBookmark
              className="text-white absolute top-4 right-4 text-[22px] font-medium cursor-pointer"
              onClick={() => handleToggleSave(movie)}
            />
          )}
          <Link to={`/movie/${movie.id}`} className='h-[370px] block bg-gray-400 rounded-[10px] mb-1.5'>
            <img className='w-full h-full object-cover rounded-[10px]' src={import.meta.env.VITE_IMAGE_URL + movie.poster_path} alt="" />
          </Link>
          <div className='p-1.5 flex flex-col gap-5'>
            <h3 title={movie.title} className='text-2xl dark:text-white light:text-black  font-medium line-clamp-1 italic'>{movie.title}</h3>
            <div className="flex justify-between py-5">
            <p className='text-yellow-300 font-medium'>Rating:   {movie.vote_average}</p>
            <p className='dark:text-white light:text-black text-[14px]'>Watch now</p>
            </div>
          </div>
        </div>
      ))
    }
  </div>
  )
}

export default Movies