export default {
    async loginUser(context, payload) {
        return await fetch('http://localhost:5000/api/auth/login', {
                method: 'POST',
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json'
                        // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: JSON.stringify({
                    email: payload.email,
                    password: payload.password
                })
            })
            .then(response => response.json())
            .then(data => {
                localStorage.setItem('userId', data.userid);
                localStorage.setItem('token', data.token);
                context.commit('setUser', {
                    token: data.token,
                    userid: data.userid
                })
                console.log(data)
                return data;
            })
            .catch(err => {
                const error = new Error(err.message);
                throw error;

            })

    },
    logout(state) {
        state.userId = null;
        state.token = null;
    },
    async regUser(context, payload) {
        return await fetch('http://localhost:5000/api/auth/register', {
                method: 'POST',
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json'
                        // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: JSON.stringify({
                    fullname: payload.fullname,
                    email: payload.email,
                    password: payload.password
                })
            })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                return data;
            })
            .catch(err => {
                const error = new Error(err.message);
                throw error;

            })

    },
    async updateCategory(context, payload) {
        console.log(payload)
        return await fetch(`http://localhost:5000/api/auth/updateUserCategory`, {
                method: 'POST',
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json'
                        // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: JSON.stringify({
                    userId: payload.id,
                    categories: payload.updateCat
                })
            })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                if (data)
                return data;
                else
                return (err);
         })
            .catch(err => {
                const error = new Error(err.message);
                throw error;

            })
        
    },

}
