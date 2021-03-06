import user from '../../api/userData'


const state = () => ({
    user: getUserDataFromStorage()?getUserDataFromStorage():null,
})

// getters
const getters = {
    favorites(state){
    return state.user.favorites
    },
    getUserData(state) {
         getUserDataFromStorage()
         return state.user
    },
    getUserName(state) {
        return state.user.fullname
    },
    getUserCategories(state) {
        return state.user.categories
    },
    hasNewRecommandations(state){
        return (state.user.dateRecommendations &&
         diffDays( Date.now(),state.user.dateRecommendations)<1)
    }


}

// actions
const actions = {

    async updateCategories({commit}, payload) {
        const res = await user.updateCategories(payload)
        if (res) {
            commit('setUserCategories', payload)
        }
        return res
    },
    async updateFavorites({commit}, payload) {

        const res = await user.updateFavorites(payload)
        if (res) {
        commit('setUserFavorites', payload)
        }
        return res
    },

    async checkNewRecs({commit}, payload) {
        const res = await user.checkNewRecs(payload)
        if (res) {
            commit('setRecommendationsStatus',res)
        }
        return res
    },



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
        
            state.user.favorites=payload.favorites
        
        updateUserDataInStorage(state.user)

    },

    setRecommendationsStatus(state,payload) {
    state.user.dateRecommendations=payload.data
    updateUserDataInStorage(state.user)

},


}


function updateUserDataInStorage(data) {
    localStorage.setItem('user', JSON.stringify(data));

}

function getUserDataFromStorage() {
    return JSON.parse(localStorage.getItem('user'))
}


function diffDays(date, otherDate) {
    const diffInDays = Math.abs(date - Date.parse(otherDate))/ (1000 * 60 * 60 * 24)
   return diffInDays
  }

export default {
    namespaced: false,
    state,
    getters,
    actions,
    mutations
}