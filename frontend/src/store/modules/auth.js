import auth from '../../api/auth'


const state = () => ({
    userId: null,
    token: null
})

// getters
const getters = {

    getUserId(state) {
        return localStorage.getItem('userId', state.userId);
    },
    getToken(state) {
        return localStorage.getItem('token', state.token);
    },
    isAuthenticated(state) {
        return localStorage.getItem('token', state.token);
    }

}

// actions
const actions = {

    async loginUser({commit}, payload) {
        const res = await auth.loginUser(payload)
        if (res) {
            commit('setUser', res)
            commit('setUserData', res)
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
        localStorage.setItem('userId', state.userid);
        localStorage.setItem('token', state.token);
    },

    setUser(state, payload) {
        console.log(payload)
        state.token = payload.token;
        state.userId = payload.userid;
        localStorage.setItem('userId', state.userId);
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