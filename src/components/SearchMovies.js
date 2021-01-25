import React, { useState } from "react";

export default function SearchMovies() {
  // state
  const [query, setQuery] = useState("");

  const searchMovies = async (e) => {
    e.preventDefault();

    const key = process.env.REACT_APP_MOVIE_KEY;

    const url = `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=${query}&page=1&include_adult=false`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.err(err);
    }
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
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="button" type="submit">
        Search
      </button>
    </form>
  );
}
