import { apikey } from "../utils/links";
import BookCards from "./BookCards";

const TradingBooks = () => {
  const querry = "Trading";
   
  const URL =
  "https://www.googleapis.com/books/v1/volumes?q=" +
  querry +
  "&key=AIzaSyB2Gdx7TvjPlynFdzFu1EIDyIlWZgmuJvQ";
  console.log(URL);
  
    return (
      <div className="mx-24   flex flex-col items-center">
      <h1 className="font-semibold text-4xl border-b-2 border-orange-500 pb-2 mt-12 mb-8 text-gray-700">
        Trading Books
      </h1><p className=" text-gray-600 text-xl mb-8">Explore the Trading books that you might like</p>
      <BookCards  URL = {URL}/>
    </div>
    );
  }
;

export default TradingBooks;