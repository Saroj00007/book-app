import { Link } from "react-router-dom";

const Categorylist = () => {
  return (
    <div className=" mx-32 my-20 flex flex-col space-y-12 text-xl items-center">
      <span className="text-3xl text-gray-500 font-semibold border-b-2 pb-3">
        Choose your desired Sector!
      </span>
      <div className="w-[100%] grid gap-8 space-x-4 grid-cols-4">
        <Link
          to="/Genre/Philosophy"
          className="px-4 py-4 font-normal rounded-lg border border-gray-200 shadow-md hover:text-orange-500 hover:shadow-orange-200 text-center"
        >
          Philosophy
        </Link>
        <Link
          to="/Genre/Fiction"
          className="px-4 py-4 font-normal rounded-lg border border-gray-200 shadow-md hover:text-orange-500 hover:shadow-orange-200 text-center"
        >
          Fiction
        </Link>
        <Link
          to="/Genre/Non-Fiction"
          className="px-4 py-4 font-normal rounded-lg border border-gray-200 shadow-md hover:text-orange-500 hover:shadow-orange-200 text-center"
        >
          Non-Fiction
        </Link>
        <Link
          to="/Genre/Mystery"
          className="px-4 py-4 font-normal rounded-lg border border-gray-200 shadow-md hover:text-orange-500 hover:shadow-orange-200 text-center"
        >
          Mystery
        </Link>
        <Link
          to="/Genre/Fantasy"
          className="px-4 py-4 font-normal rounded-lg border border-gray-200 shadow-md hover:text-orange-500 hover:shadow-orange-200 text-center"
        >
          Fantasy
        </Link>
        <Link
          to="/Genre/Science-Fiction"
          className="px-4 py-4 font-normal rounded-lg border border-gray-200 shadow-md hover:text-orange-500 hover:shadow-orange-200 text-center"
        >
          Science Fiction
        </Link>
        <Link
          to="/Genre/Biography"
          className="px-4 py-4 font-normal rounded-lg border border-gray-200 shadow-md hover:text-orange-500 hover:shadow-orange-200 text-center"
        >
          Biography
        </Link>
        <Link
          to="/Genre/History"
          className="px-4 py-4 font-normal rounded-lg border border-gray-200 shadow-md hover:text-orange-500 hover:shadow-orange-200 text-center"
        >
          History
        </Link>
        <Link
          to="/Genre/Romance"
          className="px-4 py-4 font-normal rounded-lg border border-gray-200 shadow-md hover:text-orange-500 hover:shadow-orange-200 text-center"
        >
          Romance
        </Link>
        <Link
          to="/Genre/Horror"
          className="px-4 py-4 font-normal rounded-lg border border-gray-200 shadow-md hover:text-orange-500 hover:shadow-orange-200 text-center"
        >
          Horror
        </Link>
        <Link
          to="/Genre/Poetry"
          className="px-4 py-4 font-normal rounded-lg border border-gray-200 shadow-md hover:text-orange-500 hover:shadow-orange-200 text-center"
        >
          Poetry
        </Link>
        <Link
          to="/Genre/Thriller"
          className="px-4 py-4 font-normal rounded-lg border border-gray-200 shadow-md hover:text-orange-500 hover:shadow-orange-200 text-center"
        >
          Thriller
        </Link>
        <Link
          to="/Genre/Adventure"
          className="px-4 py-4 font-normal rounded-lg border border-gray-200 shadow-md hover:text-orange-500 hover:shadow-orange-200 text-center"
        >
          Adventure
        </Link>
        <Link
          to="/Genre/Self-Help"
          className="px-4 py-4 font-normal rounded-lg border border-gray-200 shadow-md hover:text-orange-500 hover:shadow-orange-200 text-center"
        >
          Self-Help
        </Link>
        <Link
          to="/Genre/Art"
          className="px-4 py-4 font-normal rounded-lg border border-gray-200 shadow-md hover:text-orange-500 hover:shadow-orange-200 text-center"
        >
          Art
        </Link>
        <Link
          to="/Genre/Religion"
          className="px-4 py-4 font-normal rounded-lg border border-gray-200 shadow-md hover:text-orange-500 hover:shadow-orange-200 text-center"
        >
          Religion
        </Link>
        <Link
          to="/Genre/Travel"
          className="px-4 py-4 font-normal rounded-lg border border-gray-200 shadow-md hover:text-orange-500 hover:shadow-orange-200 text-center"
        >
          Travel
        </Link>
        <Link
          to="/Genre/True-Crime"
          className="px-4 py-4 font-normal rounded-lg border border-gray-200 shadow-md hover:text-orange-500 hover:shadow-orange-200 text-center"
        >
          True Crime
        </Link>
        <Link
          to="/Genre/Childrens-Literature"
          className="px-4 py-4 font-normal rounded-lg border border-gray-200 shadow-md hover:text-orange-500 hover:shadow-orange-200 text-center"
        >
          Children's Literature
        </Link>
        <Link
          to="/Genre/Classics"
          className="px-4 py-4 font-normal rounded-lg border border-gray-200 shadow-md hover:text-orange-500 hover:shadow-orange-200 text-center"
        >
          Classics
        </Link>
      </div>
    </div>
  );
};

export default Categorylist;
