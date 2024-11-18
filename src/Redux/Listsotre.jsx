import { configureStore } from "@reduxjs/toolkit";
import Bookreducer from "./readlistSlice";

const Liststore = configureStore({
    reducer : {
        Readlist : Bookreducer,
    }
});

export default Liststore;
