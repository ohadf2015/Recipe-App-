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




}