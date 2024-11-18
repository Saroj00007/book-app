import { useParams } from "react-router-dom";
import BookCards from "./BookCards";
const GenreBooks = () => {
  const { genre } = useParams();
  console.log(genre);

  const URL = `https://www.googleapis.com/books/v1/volumes?q=subject:${genre}&maxResults=20&key=AIzaSyDDm4DgUkmTQYO1IFRzEWDL6d8w_M8EcJU`;

  return (
    <div className="flex flex-col items-center space-y-6 justify-center mx-20 my-20">
        <h1 className="text-4xl font-extrabold">{genre}</h1>
      <h1 className="text-xl my-16 font-normal text-gray-700">
        Dive into the world of [{genre}] books, where stories and ideas come to
        life. Whether you're seeking to explore imaginative worlds, unravel
        thrilling mysteries, or learn from real-life experiences, [{genre}]
        offers something for every reader. Discover timeless classics, modern
        favorites, and hidden gems that will captivate your mind and inspire
        your soul.
      </h1>
      <div>
        <BookCards URL={URL} />
      </div>
    </div>
  );
};
export default GenreBooks;
