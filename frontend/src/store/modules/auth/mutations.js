export default {
    setUser(state, payload) {
        state.token = payload.token;
        state.userID = payload.userID;
    }
}