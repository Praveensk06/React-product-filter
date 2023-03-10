import React from "react";

// import { FcSearch } from "react-icons/fc";

const Search = ({ search }) => {
  return (
    <div>
      <input type="text" placeholder="Search categories" onChange={search} />
    </div>
  );
};

export default Search;
