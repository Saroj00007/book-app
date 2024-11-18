import { logo } from "../utils/links";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const books = useSelector((store) => store.Readlist.items);

  return (
    <div className=" mx-12 flex justify-between items-center gap-x-8  h-28 p-4 shadow-orange-100 shadow-sm rounded-xl">
      <div className="nav flex font-semibold gap-x-6">
        <Link to="/Books">
          {" "}
          <span className="cursor-pointer">Books</span>
        </Link>
        <Link to="/Authors">
          <span className="cursor-pointer">Authors</span>
        </Link>

        <Link to="/Readlist">
          {" "}
          <span className="cursor-pointer">Readlist
            
            
          { (books.length)? <sup className=" px-2 py-1 bg-red-600 text-white font-semibold rounded-[100%]">{books.length}</sup> : <sup></sup>}</span>
        </Link>

        <Link to="/Aboutus">
          {" "}
          <span className="cursor-pointer"> About us</span>
        </Link>
        <Link to="/Contact">
          {" "}
          <span className="cursor-pointer">Contact</span>
        </Link>
      </div>
      <div className="logo  flex flex-col items-center relative">
        <Link to="/">
          <img
            className="h-20 w-20"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLzmGWC9ehJUm08Wl_rxHfABJZip2M-Sf2RA&s"
            alt="logo"
          />
        </Link>

        <span className="absolute bottom-0 text-[12px]">Be Intelligent</span>
      </div>
      <div className="sign-in flex gap-4">
        <button className="bg-orange-400 px-4 py-2 shadow-sm rounded-md hover:bg-orange-600 text-white font-light ">
          sign in{" "}
        </button>
        <button className=" border  px-4 py-2 shadow-sm rounded-md hover:bg-orange-400 text-black font-light ">
          sign up{" "}
        </button>
      </div>
    </div>
  );
};

export default Header;
