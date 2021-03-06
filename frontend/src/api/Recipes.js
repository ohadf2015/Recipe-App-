import baseConfig from './baseConfig';
const instance = baseConfig.getAxiosObj()




export default {

    async getUserRecipes(payload, context) {
        try {
            const response = await instance.post('/recipes/', { userData: payload.userData });
         
            return response.data.data
        } catch (error) {
            throw error;
        }

    },
    
    async getMoreRecipes(payload, context) {
        try {
            const response = await instance.post('/recipes/more', { userData: payload.userData });
            return response.data.data
        } catch (error) {
            throw error;
        }

    },
    async getRecipe(payload, context) {
        try {
            const response = await instance.get(`/recipes/${payload}`);
            return response.data.data
        } catch (error) {
            throw error;
        }

    },
    async getUserFavorites(payload, context) {
        try {
            const response = await instance.post(`/recipes/getUserFavorites`,{favorites:payload.favorites});
            return response.data.data
        } catch (error) {
            throw error;
        }

    },




}