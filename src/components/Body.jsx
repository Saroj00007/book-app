import BookBody from "./BookBody";
import SearchBody from "./SearchBody";
import Categorylist from "./Categorylist";
import Footer from "./Footer";
const Body = ()=>{
    return(<div>
        <SearchBody/>
        <Categorylist/>
        <BookBody/>
        <Footer/>
        </div>
    )
}

export default Body;