import axios from 'axios';
const instance = axios.create({
    baseURL: 'http://localhost:5000/api/auth',
    timeout: 1000,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
    }
})

export default {

    async loginUser(payload) {
        try {
            const response = await instance.post('/login', {
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
            const response = await instance.post('/register', {
                fullname: payload.fullname,
                email: payload.email,
                password: payload.password
            });
            return response.data
        } catch (error) {

            throw error;
        }

    },

}