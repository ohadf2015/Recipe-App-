import user from '../../api/userData'


const state = () => ({
    user: null,
})

// getters
const getters = {

    getUserData(state) {
        console.log(getUserDataFromStorage())
        return getUserDataFromStorage()
    },
    getUserCategories(state) {
        const categories = getUserDataFromStorage().categories;
        return categories
    },


}

// actions
const actions = {

    async updateCategories(context, payload) {
        const res = await user.updateCategories(payload)
        if (res) {
            context.commit('setUserCategories', payload)
        }
        return res
    },
    async updateFavorites(context, payload) {
        const res = await user.updateFavorites(payload)
        if (res) {
            context.commit('setUserFavorites', res)
        }
        return res
    }

}

// mutations
const mutations = {

    setUserData(state, payload) {
        state.user = payload.user;
        updateUserDataInStorage(state.user)

    },
    setUserCategories(state, payload) {
        state.user.categories = payload.updateCat;

        updateUserDataInStorage(state.user)

    },
    setUserFavorites(state, payload) {
        state.user.favorites = payload.favorites;
        updateUserDataInStorage(state.user)

    },

}


function updateUserDataInStorage(data) {
    localStorage.setItem('user', JSON.stringify(data));

}

function getUserDataFromStorage() {
    console.log();
    return JSON.parse(localStorage.getItem('user'))
}

export default {
    namespaced: false,
    state,
    getters,
    actions,
    mutations
}