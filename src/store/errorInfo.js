import {createSlice} from "@reduxjs/toolkit";


const errorInfo = createSlice({
    name: 'error',
    initialState: {
        error : ""
    },
    reducers: {
        setError(state, action) {
            return { error: action.payload}    
        }
    },
});


export const {setError} = errorInfo.actions;

export default errorInfo.reducer;