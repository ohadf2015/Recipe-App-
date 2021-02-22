import recipes from '../../api/Recipes'


const state = () => ({
    recipe: null,
    recipes: null
})

// getters
const getters = {
    getRecipeData(state) {
        return state.recipe;
    },
    getRecipes(state) {
        return state.recipes;
    },
    hasRecipes(state) {
        return state.recipes && state.recipes.length > 0
    }

}

// actions
const actions = {

    async getUserRecipes(context, payload) {
        console.log(payload)
        const res = await recipes.getUserRecipes(payload)
        if (res) {
            context.commit('setRecipes', res)
        }
        return res
    },
    async getRecipe(context, payload) {
        const res = await recipes.getRecipe(payload)
        if (res) {
            console.log(res)
            context.commit('setRecipe', res)
        }
        return res
    },
}

// mutations
const mutations = {
    setRecipes(state, payload) {
        state.recipes = payload;
    },
    setRecipe(state, payload) {
        state.recipe = payload;
    }
}

export default {
    namespaced: false,
    state,
    getters,
    actions,
    mutations
}