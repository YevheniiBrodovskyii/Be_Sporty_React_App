import {createSlice} from "@reduxjs/toolkit";


const userData = createSlice({
    name: 'data',
    initialState: {
        data : [],
    },
    reducers: {
        getData(state, action) {
            return { data: action.payload}    
        },
        removeData(state) {
            return {data: []}
        }
    },
});


export const {getData, removeData} = userData.actions;

export default userData.reducer;