import { useRouteError } from "react-router-dom";

const Error = ()=>{
    const error = useRouteError();
    console.log(error);
    
    return(
        <>
        <h1 className="text-center text-3xl">oops something went wrong</h1>
        </>
    )
}

export default Error;