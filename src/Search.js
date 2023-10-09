import React from "react";
import axios from "axios";

const Search = ({ search, setSearch, setRecipes }) => {
  return (
    <>
      <form
        onSubmit={async (ev) => {
          ev.preventDefault();
          const data = await axios.get(`/api/ingredients?search=${search}`);
          console.log(data);
          setRecipes(data.data);
          setSearch("");
        }}
      >
        <input
          type="text"
          placeholder="Ex. apples, flour, sugar"
          value={search}
          onChange={(ev) => {
            setSearch(ev.target.value);
            console.log(search);
          }}
        />
        <button>Search</button>
      </form>
    </>
  );
};

export default Search;
