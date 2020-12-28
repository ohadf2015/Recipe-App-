export default {
    getUserID(state) {
        return state.userID;
    },
    getToken(state) {
        return state.token;
    },
    isAuthenticated(state) {
        return !!state.token;
    }

}