import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SearchBody = () => {
  const [search_val, setsearch_val] = useState("");
  const searchvalue = search_val.replace(/ /g, "+");

  const handel_click = () => {
    
    console.log(searchvalue);
 
  };

  return (
    <div className="flex items-center flex-col bg-[#f0f0f0] py-28 mt-12">
      <h1 className="text-5xl py-8 font-bold text-gray-800">Discover books you'll love!</h1>
      <h3 className="font-medium text-xl text-gray-700 text-center w-[70%] ">Enter a book you like and the site will analyse our huge database of real readers' favorite books to provide book recommendations and suggestions for what to read next.</h3>

    <div className="flex justify-center gap-8 items-center w-[80%] h-12 mt-12">

      <input
        value={search_val}
        onChange={(e) => {
          setsearch_val(e.target.value);
        }}
        type="text"
        placeholder="Search books, authors, publicaton..."
        className="border-2 rounded-md px-2 border-gray-400  h-16 w-3/4"
      />
      
      <Link 
      to={"/Book-details/" + searchvalue }
      >
      <button
        onClick={handel_click}
        className="bg-orange-300 text-white font-normal text-lg px-6 py-2 rounded-sm hover:bg-orange-500 "
      >
        Search
      </button>
      </Link>
    </div>      
    </div>
  );
};

export default SearchBody;
