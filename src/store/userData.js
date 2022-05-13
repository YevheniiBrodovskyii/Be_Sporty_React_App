import {createSlice} from "@reduxjs/toolkit";


const userData = createSlice({
    name: 'data',
    initialState: {
        data : []
    },
    reducers: {
        getData(state, action) {
            return { data: action.payload}    
        }
    },
});


export const {getData} = userData.actions;

export default userData.reducer;