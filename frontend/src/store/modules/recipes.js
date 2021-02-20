import recipes from '../../api/Recipes'


const state = () => ({
    userId: null,
    token: null
})

// getters
const getters = {

    getRecipe(state) {
        return state.recipes;
    },
    hasRecipe(state) {
        return state.recipes && state.recipes.length > 0
    }

}

// actions
const actions = {

    async getUserRecipes(context, payload) {
        const res = await recipes.getUserRecipes(payload)
        if (res) {
            context.commit('setRecipes', res.data)
        }
        return res.data
    },
}

// mutations
const mutations = {
    setRecipes(state, payload) {
        state.recipes = payload;
    }
}

export default {
    namespaced: false,
    state,
    getters,
    actions,
    mutations
}