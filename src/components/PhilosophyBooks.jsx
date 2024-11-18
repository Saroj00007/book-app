import BookCards from "./BookCards";

const PhilosophyBooks = () => {
  const querry = "philosophy";
   
  const URL =
  "https://www.googleapis.com/books/v1/volumes?q=" +
  querry +
  "&key=AIzaSyB2Gdx7TvjPlynFdzFu1EIDyIlWZgmuJvQ";
    return (
      <div className="mx-24   flex flex-col items-center">
        <h1 className="font-semibold text-4xl  border-b-2 border-orange-500 pb-2 mt-12 mb-8 text-gray-700">
          Philosophy Books
        </h1><p className=" text-gray-600 text-xl mb-8">Explore the Philosophical books that you might like</p>
        <BookCards  URL = {URL}/>
      </div>
    );
  }
;

export default PhilosophyBooks;
