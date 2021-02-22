import axios from 'axios';
export default {
    getAxiosObj() {
        const base = axios.create({
            baseURL: 'http://localhost:5000/api/',
            timeout: 5000,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },

        })
        return base
    }

}