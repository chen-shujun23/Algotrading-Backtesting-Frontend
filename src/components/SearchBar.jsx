import React, { useState } from "react";
import ButtonSubmit from "./ButtonSubmit";

const SearchBar = () => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };
  const handleQuerySubmit = (e) => {
    e.preventDefault();
    console.log("querySubmit");
  };

  return (
    <form
      className="flex justify-around h-full w-full self-center px-4"
      onSubmit={handleQuerySubmit}
    >
      <input
        className="h-12 w-2/3 px-4 rounded-full"
        placeholder="Search for strategies"
        value={query}
        onChange={handleInputChange}
      />

      <ButtonSubmit bgColour="bg-blue" innerText="Submit" />
    </form>
  );
};

export default SearchBar;
