export default {
    getCategs(state) {
        return state.categories;
    },
    hasCategs(state) {
        return state.categories && state.categories.length > 0
    }
}