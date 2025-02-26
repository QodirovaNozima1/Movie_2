import React from "react";
import "./Search.css"
import Movies from "../../components/movies/Movies";
import { useGetSearchQuery } from "../../redux/api/movie.api";
import { Input, Empty } from "antd";
import { useSearchParams } from "react-router-dom";


const Search = () => {
  const { Search } = Input;
  // const [query, setQuery] = useState("")
  const [params, setParams] = useSearchParams();

  const query = params.get("q") || "";

  const onSearch = (value) => {
    // setQuery(value)
    params.set("q", value);
    setParams(params);
  };
  const { data, isSuccess } = useGetSearchQuery(
    { include_adult: false, query: query },
    { skip: !query }
  );

  return (
    <div className="container  search">
      <div className="bar">
        <Search
          placeholder="movie name"
          onSearch={onSearch}
          enterButton
          autoFocus
          defaultValue={query}
        />
      </div>
      {!data?.total_results && <Empty />}

      <Movies data={data} />
    </div>
  );
};

export default Search;