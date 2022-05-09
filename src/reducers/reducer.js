const initialState = {
    loaded: false,
    token: [],
}

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case "LOADED":
            return {
                ...state,
                loaded: action.loaded,
            }
        case "TOKEN":
            return {
                ...state,
                token: action.token,
            }   
        default:
            return state
    }
}

export default reducer;