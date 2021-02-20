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

    async getUserRecipes(payload, context) {
        try {
            console.log(payload.userData, context)
            const response = await instance.post('/', { user: payload.userData });
            console.log(response)
            return response
        } catch (error) {
            throw error;
        }

    },




}