import React from "react";

export default function SearchMovies() {
  const searchMovies = async (e) => {
    e.preventDefault();
    console.log("submitting");
  };

  return (
    <form className="form" onSubmit={searchMovies}>
      <label htmlFor="query" className="label">
        Movie Name
      </label>
      <input
        type="text"
        className="input"
        name="query"
        placeholder="i.e. Fight Club"
      />
      <button className="button" type="submit">
        Search
      </button>
    </form>
  );
}
