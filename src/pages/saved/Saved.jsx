import React, { useEffect } from 'react'
import { useSelector } from "react-redux";
import Movies from '../../components/movies/Movies'
import Carderror from '../../components/carderror/Carderror';
const Saved = () => {

  useEffect(() => {
    window.scrollTo({ behavior: "smooth", left: 0, top: 0 })
  }, [])

  
  return (
    <div>
       <h2 className='text-3xl text-white'>Saved</h2>
    </div>
)

}

      export default Saved