import Vue from 'vue'
import Vuex from 'vuex'
import authModule from './modules/auth.js';
import recipesModule from './modules/recipes/index.js';
import categoriesModule from './modules/categories';
import usersModule from './modules/user';
// import example from './module-example'

Vue.use(Vuex)
    /*
     * If not building with SSR mode, you can
     * directly export the Store instantiation;
     *
     * The function below can be async too; either use
     * async/await or return a Promise which resolves
     * with the Store instance.
     */

export default function( /* { ssrContext } */ ) {
    const Store = new Vuex.Store({
        modules: {
            auth: authModule,
            recipes: recipesModule,
            categories: categoriesModule,
            users: usersModule,
        },
        // enable strict mode (adds overhead!)
        // for dev mode only
        strict: process.env.DEBUGGING
    })

    return Store
}