import {createSlice} from "@reduxjs/toolkit";


const userName = createSlice({
    name: 'username',
    initialState: {
        username: "",
    },
    reducers: {
        getUserName(state, action) {
            return { username: action.payload}
        }
    },
});


export const {getUserName} = userName.actions;

export default userName.reducer;