import baseConfig from './baseConfig';
const instance = baseConfig.getAxiosObj()

export default {

    async loginUser(payload) {
        try {
            const response = await instance.post('/auth/login', {
                email: payload.email,
                password: payload.password
            });
            return response.data
        } catch (error) {
            throw error;
        }

    },


    async regUser(payload) {

        try {
            const response = await instance.post('/auth/register', {
                fullname: payload.fullname,
                email: payload.email,
                password: payload.password
            });
            return response.data
        } catch (error) {

            throw error;
        }

    },

    async logout() {

        try {
            const response = await instance.get('/auth/logout');
            return response.data
        } catch (error) {

            throw error;
        }

    },

}