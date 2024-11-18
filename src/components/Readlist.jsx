import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Readlist = () => {

// subscribing the store
const favBooks = useSelector((store) => store.Readlist.items);
 console.log(favBooks);

 return (
    <div className="grid grid-cols-3 mt-20 mx-16  gap-6 ">
      {favBooks.map((book, index) => {
        const {
          authors,
          title,
          imageLinks,
          description,
          publishedDate,
          publisher,
          categories,
        } = book.volumeInfo;
        const formattedtext = title.replace(/ /g, "+");
        console.log(formattedtext);

        return (
          <div
            key={book.id}
            className="w-[95%] cursor-pointer hover:scale-95 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out"
          >
            {/* Book Thumbnail */}
            <div className="overflow-hidden rounded-t-lg pt-2">
              <img
                src={imageLinks?.smallThumbnail}
                alt={book.title}
                className="w-full h-32 object-contain "
              />
            </div>

            {/* Book Information */}
            <div className="p-4 flex flex-col justify-between ">
              <h3 className="text-md font-normal text-gray-800 mb-1 truncate">
                {title}
              </h3>

              <p className="text-sm text-gray-600 mb-1 truncate">
                {authors?.length > 0
                  ? `Author(s): ${authors.join(", ")}`
                  : "Author(s): Unknown"}
              </p>

              <p className="text-xs text-gray-500 mb-1">
                Category: {categories}
              </p>

              <p className="text-xs text-gray-500 mb-1">
                {publishedDate || 2019}
              </p>
              <p className="text-xs text-gray-500 mb-1">
                Publisher: {publisher || "not available"}
              </p>
              {/*       
              <p className="text-[14px] text-gray-700 mb-4 line-clamp-3">
                {description || 'No description available.'}
              </p> */}

              {/* Book Actions */}
              <div className="flex justify-between mt-1 items-center gap-x-1 ">
                <Link to={"/Book-details/" + formattedtext}>
                  <button className="leading-4 bg-orange-600 active:shadow-lg active:scale-95 active:bg-orange-700 text-white px-4 py-3 font-normal  rounded-md text-[14px] hover:bg-orange-600 transition-colors duration-200">
                    View Details
                  </button>
                </Link>
                <button
                  onClick={()=>{
                    handelclick(book);
                  }}
                  className=" leading-4 bg-orange-400 active:shadow-lg active:scale-95 active:bg-orange-700 text-white px-4 py-3 font-normal  rounded-md text-[14px] hover:bg-orange-600 transition-colors duration-200"
                >
                  Add to Favorites
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
);
};

export default Readlist;
