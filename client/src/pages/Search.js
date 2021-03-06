import React from "react";


const Search = (props) => {

    return (
      <div className="search-area">
        <form onSubmit={props.handleSubmit}>
          <input
            onChange={props.handleChange}
            placeholder="Search books"
            type="text"
          />
          <button type="submit">Search</button>

        </form>
      </div>
    );
  }


export default Search;
