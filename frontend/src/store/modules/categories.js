import categories from "../../api/categories";

const state = () => ({
    categories: null
});

// getters
const getters = {
    getCategories(state) {
        return state.categories;
    }
};

// actions
const actions = {
    async getCategories(context) {
        const res = await categories.getCategories();
        console.log(res)
        if (res) {
            context.commit("setCategories", res);
        }
        return res;
    }
};

// mutations
const mutations = {
    setCategories(state, payload) {
        state.categories = payload;
    }
};

export default {
    namespaced: false,
    state,
    getters,
    actions,
    mutations
};