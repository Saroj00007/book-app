import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BookDetails = () => {
  const { bookname } = useParams();
  const link = `https://www.googleapis.com/books/v1/volumes?q=${bookname}&key=AIzaSyB2Gdx7TvjPlynFdzFu1EIDyIlWZgmuJvQ`
 

  const [bookDetails, setbookDetails] = useState(null);

  useEffect(() => {
   
    fetchdetails();
  }, []);

  const fetchdetails = async () => {
    console.log("fetching");
    const data = await fetch(link);
    const json = await data.json();
    
    setbookDetails(json?.items[0]?.volumeInfo);
  };
  console.log(bookDetails);
  

  if (!bookDetails) {
    return <div> loading...</div>;
  } else {
    return (
        
        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg max-w-3xl mx-auto my-10">
        {/* Book Cover */}
        
        <img 
            src={bookDetails.imageLinks?.thumbnail} 
            alt={bookDetails.title} 
            className="w-48 h-auto rounded-md shadow-md mb-6" 
        />

        {/* Book Title */}
        <h1 className="text-2xl font-semibold text-gray-800 mb-2">{bookDetails.title}</h1>
        
        {/* Authors */}
        {bookDetails?.authors && (
            <p className="text-gray-600 text-lg italic mb-4">
                By {bookDetails?.authors.join(", ")}
            </p>
        )}

        {/* Book Details */}
        <div className="text-gray-700 space-y-2">
            {/* Published Date */}
            {bookDetails.publishedDate && (
                <p><strong>Published:</strong> {bookDetails.publishedDate}</p>
            )}

            {/* Publisher */}
            {bookDetails.publisher && (
                <p><strong>Publisher:</strong> {bookDetails.publisher}</p>
            )}

            {/* Page Count */}
            {bookDetails.pageCount && (
                <p><strong>Pages:</strong> {bookDetails.pageCount}</p>
            )}

            {/* Categories */}
            {bookDetails.categories && (
                <p><strong>Categories:</strong> {bookDetails.categories.join(", ")}</p>
            )}

            {/* Industry Identifiers */}
            {bookDetails.industryIdentifiers && (
                <p><strong>Identifiers:</strong> {bookDetails.industryIdentifiers.map(id => `${id.type}: ${id.identifier}`).join(", ")}</p>
            )}

            {/* Average Rating */}
            {bookDetails.averageRating && (
                <p><strong>Rating:</strong> {bookDetails.averageRating} ({bookDetails.ratingsCount} reviews)</p>
            )}

            {/* Maturity Rating */}
            {bookDetails.maturityRating && (
                <p><strong>Content Rating:</strong> {bookDetails.maturityRating}</p>
            )}

            {/* Language */}
            {bookDetails.language && (
                <p><strong>Language:</strong> {bookDetails.language.toUpperCase()}</p>
            )}
        </div>

        {/* Description */}
        {bookDetails.description && (
            <div className="mt-4 text-gray-600 leading-relaxed">
                <h2 className="text-lg font-semibold mb-2">Description</h2>
                <p>{bookDetails.description}</p>
            </div>
        )}

        {/* Links */}
        <div className="mt-6 space-x-4">
            {bookDetails.previewLink && (
                <a 
                    href={bookDetails.previewLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-600 transition duration-200"
                >
                    Preview Book
                </a>
            )}
            {bookDetails.infoLink && (
                <a 
                    href={bookDetails.infoLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-gray-500 text-white py-2 px-4 rounded-lg shadow hover:bg-gray-600 transition duration-200"
                >
                    More Info
                </a>
            )}
            {bookDetails.canonicalVolumeLink && (
                <a 
                    href={bookDetails.canonicalVolumeLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-green-500 text-white py-2 px-4 rounded-lg shadow hover:bg-green-600 transition duration-200"
                >
                    Buy Via Google Books.
                </a>
            )}
        </div>
    </div>
    );
  }
};

export default BookDetails;
