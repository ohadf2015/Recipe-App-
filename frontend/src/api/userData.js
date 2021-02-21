import baseConfig from './baseConfig';
const instance = baseConfig.getAxiosObj()


export default {

    async updateCategories(payload, context) {
        try {
            console.log(payload, context)
            const response = await instance.post('/userData/updateUserCategory', {
                userId: payload.id,
                categories: payload.updateCat
            });
            return response.data
        } catch (error) {
            throw error;
        }

    },




}