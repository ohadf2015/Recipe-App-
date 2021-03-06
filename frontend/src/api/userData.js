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
    async updateFavorites(payload, context) {
        try {
            const response = await instance.post('/userData/updateUserFavorites', {
                userId: payload.userId,
                favorites: payload.favorites
            });
            return response.data
        } catch (error) {
            throw error;
        }

    },
    async checkNewRecs(payload, context) {
        try {
            const response = await instance.post('/userData/checkNewRecs', {
               userId:payload.userId,
            });
            return response.data
        } catch (error) {
            throw error;
        }

    },




}