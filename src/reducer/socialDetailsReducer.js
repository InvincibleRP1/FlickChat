export const initialState = {
    posts: [],
    users: [],
}

export const socialReducer = (currentState, action) => {
    switch(action.type)
    {
        case "initialize-posts":
        return {...currentState, posts: action.posts}

        case "initialize-users":
        return {...currentState, users: action.users}

        default:
        return currentState;
    }
}