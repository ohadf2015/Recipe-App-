import baseConfig from './baseConfig';
const instance = baseConfig.getAxiosObj()




export default {

    async getUserRecipes(payload, context) {
        try {
            console.log(payload)
            const response = await instance.post('/recipes/', { user: payload.user });
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




}