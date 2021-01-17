export default {
    getRecipe(state) {
        return state.recipes;
    },
    hasRecipe(state) {
        return state.recipes && state.recipes.length > 0
    }

}