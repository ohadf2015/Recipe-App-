import axios from 'axios';
const instance = axios.create({
    baseURL: 'http://localhost:5000/api/userData',
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
            const response = await instance.post('/updateUserCategory', {
                userId: payload.id,
                categories: payload.updateCat
            });
            return response
        } catch (error) {
            throw error;
        }

    },




}