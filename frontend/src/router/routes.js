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
          { path: '/myRecipes', component: () => import('pages/menu/MyRecipes.vue') },
          { path: '/helpAndFeedback', component: () => import('pages/menu/HelpAndFeedback.vue') },
          { path: '/myMessenger', component: () => import('pages/menu/MyMessenger.vue') },
          { path: '/myNotifications', component: () => import('pages/menu/MyNotifications.vue') },
          { path: '/myProfile', component: () => import('pages/menu/MyProfile.vue') },
          { path: '/settings', component: () => import('pages/menu/Settings.vue') },
          { path: '/gingerbreadWaffles', component: () => import('pages/recipes/GingerbreadWaffles.vue')},
          { path: '/topItalianPizza', component: () => import('pages/recipes/TopItalianPizza.vue')}
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
