export default {
    async getCatego(context) {
        await fetch('http://localhost:5000/api/categories/', {
                method: 'GET',
            })
            .then(response => response.json())
            .then(d => {
                context.commit('setCatego', d.data);
            })
            .catch(err => {
                throw err;
            })
    }
}