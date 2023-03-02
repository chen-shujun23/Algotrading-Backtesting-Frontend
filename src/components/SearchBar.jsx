import React, { useState } from "react";
import Button from "./Button";

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
      className="flex justify-around h-1/2 w-1/4 self-center px-4"
      onSubmit={handleQuerySubmit}
    >
      <input
        className="h-full w-2/3 px-4 rounded-full"
        placeholder="Search for strategies"
        value={query}
        onChange={handleInputChange}
      />

      <Button
        type="submit"
        height="h-full"
        bgColour="bg-blue"
        fontSize="text-12"
        innerText="Submit"
      />
    </form>
  );
};

export default SearchBar;
