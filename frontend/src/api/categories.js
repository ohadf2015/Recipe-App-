import axios from 'axios';
const instance = axios.create({
    baseURL: 'http://localhost:5000/api/categories',
    timeout: 1000,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
    }
})

export default {

    async getCategories() {
        try {
            const response = await instance.get('/getCategories');
            return response
        } catch (error) {
            throw error;
        }
    },



}