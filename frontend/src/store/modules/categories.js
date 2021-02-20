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
        if (res) {
            context.commit("setCategories", res.data);
        }
        return res.data;
    }
};

// mutations
const mutations = {
    setCategories(state, payload) {
        state.categories = payload.data;
    }
};

export default {
    namespaced: false,
    state,
    getters,
    actions,
    mutations
};