const initialState = { isLogged: false, user:{} }

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SET_LOGGED':
            return { ...state, isLogged: action.payload }
        case 'SET_USER':
            return { ...state, user: action.payload }
        default:
            return state
    }
}