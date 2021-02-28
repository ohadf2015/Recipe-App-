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
         return getUserDataFromStorage()
    },
    getUserCategories(state) {
        return state.user.categories
    },


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
          console.log('update success')
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
        
            state.user.favorites=payload.favorites
            console.log(state.user.favorites.length)
        
        updateUserDataInStorage(state.user)

    },

}


function updateUserDataInStorage(data) {
    localStorage.setItem('user', JSON.stringify(data));
    console.log(localStorage.getItem('user'))

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