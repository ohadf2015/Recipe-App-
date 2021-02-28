import axios from 'axios';
export default {
    getAxiosObj() {
        const base = axios.create({
            baseURL: 'http://localhost:5000/api/',
            withCredentials: true,
             credentials: 'include',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                "Authorization": "Bearer my-token",
            },

        })
        return base
    }

}

// timeout: 10000,