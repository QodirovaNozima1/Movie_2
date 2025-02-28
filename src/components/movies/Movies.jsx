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
          <Link to={`/movie/${movie.id}`} className='h-[370px] block bg-gray-400 rounded-[10px]'>
            <img className='w-full h-full object-cover rounded-[10px]' src={import.meta.env.VITE_IMAGE_URL + movie.poster_path} alt="" />
          </Link>
          <div className='p-1.5'>
            <h3 title={movie.title} className='text-2xl text-slate-600  font-medium line-clamp-1'>{movie.title}</h3>
            <p className='text-yellow-500 font-medium'>{movie.vote_average}</p>
          </div>
        </div>
      ))
    }
  </div>
  )
}

export default Movies