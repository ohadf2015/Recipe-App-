import user from '../../api/userData'


const state = () => ({
    user: null,
})

// getters
const getters = {

    getUserData(state) {
        return state.user;
    },
    getUserCategories(state) {
        return state.user.categories;
    },
    // getToken(state) {
    //     return state.token;
    // },
    // isAuthenticated(state) {
    //     return state.token;
    // }

}

// actions
const actions = {

    async updateCategories(context, payload) {
        const res = await user.updateCategories(payload)
        if (res) {
            // console.log(res)
            context.commit('setUserCategories', payload)
        }
        return res
    }

}

// mutations
const mutations = {

    setUserData(state, payload) {
        state.user = payload.user;
        // localStorage.setItem('userId', state.userid);
        // localStorage.setItem('token', state.token);
    },
    setUserCategories(state, payload) {
        state.user.categories = payload.updateCat;
        // localStorage.setItem('userId', state.userid);
        // localStorage.setItem('token', state.token);
    },

}

export default {
    namespaced: false,
    state,
    getters,
    actions,
    mutations
}