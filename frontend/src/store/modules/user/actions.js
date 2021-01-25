export default{


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
        
    }

}
