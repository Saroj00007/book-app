
import { createSlice } from "@reduxjs/toolkit";

const ReadlistSlice = createSlice({
    name:"Readlist" , 
    initialState: {
        items : [] 
    },
    reducers : {
        addBooks : (state , action) =>{
            state.items.push(action.payload);
        },
    }
})

export const { addBooks} = ReadlistSlice.actions;
export default ReadlistSlice.reducer;
