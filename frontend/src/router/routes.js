const routes = [{
        path: '/',
        component: () =>
            import ('pages/Login.vue'),
        /*children: [
            { path: '', component: () =>
                    import ('pages/Index.vue') }
        ]*/
    },
    {
        path: '/signup',
        component: () =>
            import ('pages/SignUp.vue')
    },
    {
        path: '/categories',
        component: () =>
            import ('pages/Categories.vue')
    },
                    {
        path: '/forgotPassword',
        component: () =>
            import ('components/forgotPassword.vue')
    },
    {
        path: '/main',
        component: () => import('layouts/MainFinal.vue'),
        children: [
          { path: '/main', component: () => import('pages/Main.vue') },
          { path: '/myRecipes', component: () => import('pages/myRecipes.vue') }
        ]
    },
    // Always leave this as last one,
    // but you can also remove it
    {
        path: '*',
        component: () =>
            import ('pages/Error404.vue')
    }
]

export default routes
