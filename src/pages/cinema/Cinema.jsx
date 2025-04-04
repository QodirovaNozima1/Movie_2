import Movies from "../../components/movies/Movies";
import { useGetGenresQuery, useGetMoviesQuery } from "../../redux/api/movie.api";
import { Pagination, Spin } from "antd";
import React from "react";
import "./Cinema.css"
import { useSearchParams } from "react-router-dom";
import { MdOutlineClose } from "react-icons/md";

const Cinema = () => {
  const [params, setParams] = useSearchParams();
  const page = parseInt(params.get("page")) || 1;
  const with_genres = params.get("genres") || "";

  const { data, isLoading } = useGetMoviesQuery({
    page,
    without_genres: "18,36,10749",
    with_genres,
  });

  const { data: genreData } = useGetGenresQuery();

  const handleChangePage = (p) => {
    if (p === 1) {
      params.delete("page");
    } else {
      params.set("page", p.toString());
    }
    setParams(params);
  };

  const handleChangeGenre = (id) => {
    let genresArray = with_genres ? with_genres.split("-") : [];
    const genreId = id.toString();

    if (genresArray.includes(genreId)) {
      genresArray = genresArray.filter((g) => g !== genreId);
    } else {
      genresArray.push(genreId);
    }

    if (genresArray.length > 0) {
      params.set("genres", genresArray.join("-"));
    } else {
      params.delete("genres");
    }

    setParams(params);
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex items-center gap-3 overflow-auto py-3 genre-scroll cinema__box">
        {genreData?.genres?.map((genre) => {
          const isActive = with_genres.split("-").includes(genre.id.toString());
          return (
            <div
              key={genre.id}
              onClick={() => handleChangeGenre(genre.id)}
              className={`px-4 py-2 rounded-full border whitespace-nowrap cursor-pointer select-none transition button ${
                isActive
                  ? "bg-red-600 text-white border-red-600 "
                  : "bg-slate-600 text-white border-none"
              }`}
            >
              {isActive ? (
                <div className="flex items-center gap-2">
                  {genre.name}
                </div>
              ) : (
                genre.name
              )}
            </div>
          );
        })}
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <Spin size="large" />
        </div>
      ) : (
        <Movies data={data} />
      )}

      <div className="flex justify-center py-6">
        <Pagination 
           className=""
          current={page}
          total={Math.min(data?.total_pages || 1, 500) * 10}
          showSizeChanger={false}
          size="large"
          style={{background:"transparent"}}
          onChange={handleChangePage}
        />
      </div>
    </div>
  );
};

export default Cinema;