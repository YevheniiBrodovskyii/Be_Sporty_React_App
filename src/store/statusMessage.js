import {createSlice} from "@reduxjs/toolkit";


const statusMessage = createSlice({
    name: 'status',
    initialState: {
        status : ""
    },
    reducers: {
        setStatus(state, action) {
            return { status: action.payload}    
        }
    },
});


export const {setStatus} = statusMessage.actions;

export default statusMessage.reducer;