import {createSlice} from "@reduxjs/toolkit";


const loadingStatus = createSlice({
    name: 'loaded',
    initialState: {
        loaded : true
    },
    reducers: {
        setLoading(state, action) {
            return { loaded: action.payload}    
        }
    },
});


export const {setLoading} = loadingStatus.actions;

export default loadingStatus.reducer;