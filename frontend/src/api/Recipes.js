import axios from 'axios';
const instance = axios.create({
    baseURL: 'http://localhost:5000/api/recipes',
    timeout: 1000,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
    }
})


export default {

    async updateCategories(payload, context) {
        try {
            console.log(payload, context)
            const response = await instance.post('/', { user: user });
            return response
        } catch (error) {
            throw error;
        }

    },




}