import React, { useState } from "react";

const SearchImage = ({ searchValue }) => {
  const [search, setSearch] = useState("");

  const submit = (e) => {
    e.preventDefault();
    searchValue(search.trim());
  };
  return (
    <div className="p-5 m-12">
      <form onSubmit={submit}>
        <div className="flex justify-center outline-none">
          <input
            type="text"
            placeholder="Seacrh Images..."
            className="outline-none border-b-2 border-black w-3/12	p-1"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <button
            type="submit"
            className="border-x-slate-500 bg-green-800 rounded-sm p-2 text-white font-bold"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchImage;
