export default {
    async getRec(context) {
        await fetch('http://localhost:5000/api/recipes/', {
                method: 'GET',
            })
            .then(response => response.json())
            .then(d => {
                context.commit('setRecipe', d.data);
            })
            .catch(err => {
                throw err;
            })
    }
    // async getRec(context) {
    //     await fetch('http://localhost:5000/api/recipes/:id', {
    //             method: 'GET',
    //         })
    //         .then(response => response.json())
    //         .then(d => {
    //             context.commit('setRecipe', d.data);
    //         })
    //         .catch(err => {
    //             throw err;
    //         })
    // }
}