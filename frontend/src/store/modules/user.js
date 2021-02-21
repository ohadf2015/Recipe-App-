import user from '../../api/userData'


const state = () => ({
    user: null,
})

// getters
const getters = {

    getUserData(state) {
        return getUserDataFromStorage()
    },
    getUserCategories(state) {
        const categories = getUserDataFromStorage().categories;
        return categories
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
            context.commit('setUserCategories', payload)
        }
        return res
    }

}

// mutations
const mutations = {

    setUserData(state, payload) {
        state.user = payload.user;
        updateUserDataInStorage(state.user)
            // localStorage.setItem('userId', state.userid);
            // localStorage.setItem('token', state.token);
    },
    setUserCategories(state, payload) {
        state.user.categories = payload.updateCat;

        updateUserDataInStorage(state.user)
            // localStorage.setItem('userId', state.userid);
            // localStorage.setItem('token', state.token);
    },

}


function updateUserDataInStorage(data) {
    localStorage.setItem('user', JSON.stringify(data));

}

function getUserDataFromStorage() {
    return JSON.parse(localStorage.getItem('user'))
}

export default {
    namespaced: false,
    state,
    getters,
    actions,
    mutations
}