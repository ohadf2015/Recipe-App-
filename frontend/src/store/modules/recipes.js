import recipes from '../../api/Recipes'


const state = () => ({
    recipe: null,
    recipes: null,
    moreRecipes:null,
    search:'',
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
    },
    getNewRow(state) {
        return state.moreRecipes 
    },
    search(state) {
        return state.search 
    },


}

// actions
const actions = {

    async getUserRecipes(context, payload) {
        const res = await recipes.getUserRecipes(payload)
        if (res) {
            context.commit('setRecipes', res)
        }
        return res
    },
    async getMoreRecipes(context, payload) {
        const res = await recipes.getMoreRecipes(payload)
        if (res) {
            context.commit('setNewRowRecipes', res)
        }
        return res
    },
    async getUserFavorites(context, payload) {
        const res = await recipes.getUserFavorites(payload)
        if (res) {
            context.commit('setRecipes', res)
        }
        return res
    },
    async getRecipe(context, payload) {
        const res = await recipes.getRecipe(payload)
        if (res) {
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
    },
    setNewRowRecipes(state, payload) {
        state.moreRecipes = payload;
    },
    setSearch(state, payload) {
        state.search = payload;
    }
}

export default {
    namespaced: false,
    state,
    getters,
    actions,
    mutations
}