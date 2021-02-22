import baseConfig from './baseConfig';
const instance = baseConfig.getAxiosObj()


export default {

    async getCategories() {
        try {
            const response = await instance.get('categories/getCategories');
            return response.data.data
        } catch (error) {
            throw error;
        }
    },



}