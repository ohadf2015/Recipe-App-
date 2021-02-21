import auth from '../../api/auth'


const state = () => ({
    userId: null,
    token: null
})

// getters
const getters = {

    getUserId(state) {
        return state.userId;
    },
    getToken(state) {
        return state.token;
    },
    isAuthenticated(state) {
        return state.token;
    }

}

// actions
const actions = {

    async loginUser(context, payload) {
        const res = await auth.loginUser(payload)
        if (res) {
            context.commit('setUser', res)
            context.commit('setUserData', res)
        }
        return res
    },


    async regUser(context, payload) {
        const res = await auth.regUser(payload)
        if (res) {}
        return res
    }
}

// mutations
const mutations = {

    logout(state) {
        state.userId = null;
        state.token = null;
    },

    setUser(state, payload) {
        state.token = payload.token;
        state.userId = payload.userid;
        localStorage.setItem('userId', state.userid);
        localStorage.setItem('token', state.token);
    },

}

export default {
    namespaced: false,
    state,
    getters,
    actions,
    mutations
}