import React from "react";
import axios from "axios";

const Search = ({ search, setSearch, setRecipes }) => {
  return (
    <>
      <form
        onSubmit={async (ev) => {
          ev.preventDefault();
          const data = await axios.get(`/api/ingredients?search=${search}`, {
            headers: {
              Accept: "application/json, text/plain, */*",
              "Accept-Encoding": "gzip, compress, deflate, br",
              Host: "httpbin.org",
              "User-Agent":
                "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36",
              "X-Amzn-Trace-Id": "Root=1-643d039e-36575b1273b5f45a18b7d9c9",
            },
          });
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
