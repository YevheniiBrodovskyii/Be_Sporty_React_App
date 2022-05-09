const isLoaded = (loaded) => {
    return {
        "type": "LOADED",
        "loaded": loaded
    }
}

const getToken = (token) => {
    return {
        "type": "TOKEN",
        "token": token
    }
}

export {isLoaded, getToken}