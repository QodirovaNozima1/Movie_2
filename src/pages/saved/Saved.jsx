import Movies from "../../components/movies/Movies";
import React, {useEffect} from "react";
import { useSelector } from "react-redux";

const Saved = () => {
  const saved = useSelector((state) => state.saved?.value);
  const data = { results: saved }; 

  useEffect(() => {
    window.scrollTo({ behavior: "smooth", left: 0, top: 0 })
}, [])

  return (
    <div className="container h-svh">
      <h1 className="text-3xl text-slate-500 text-center font-bold m-auto">SAVED</h1>
         <Movies data={data} />
    </div>
  );
};

export default Saved;