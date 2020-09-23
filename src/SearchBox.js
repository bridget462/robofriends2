import React from "react";
import "./SearchBox.css";

const SearchBox = ({ searchChange }) => {
  return (
    <div>
      <input
        className="pa3 ba b--white bg-transparent hover-white"
        type="search"
        placeholder="search robots here!"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
