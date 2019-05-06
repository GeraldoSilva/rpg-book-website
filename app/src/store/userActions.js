export default {
    setIsLogged(logged) {
        return { type: 'SET_LOGGED', payload: logged }
    },
    seUser(user) {
        return { type: 'SET_USER', payload: user }
    }
}

