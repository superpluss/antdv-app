import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

let routes: Array<RouteRecordRaw> = [
    // {
    //     // will match everything
    //     path: '*',
    //     component: () => import('@/views/404.vue'),
    // },
    {
        path: '/',
        name: 'Home',
        redirect: '/dashboard',
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        meta: {
            layout: "dashboard",
        },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "dashboard" */ '@/views/Dashboard.vue'),
    },
    {
        path: '/layout',
        name: 'Layout',
        meta: {
            layout: "dashboard",
        },
        component: () => import('@/views/Layout.vue'),
    },
    {
        path: '/tables',
        name: 'Tables',
        meta: {
            layout: "dashboard",
        },
        component: () => import('@/views/Tables.vue'),
    },
    {
        path: '/billing',
        name: 'Billing',
        meta: {
            layout: "dashboard",
        },
        component: () => import('@/views/Billing.vue'),
    },
    {
        path: '/rtl',
        name: 'RTL',
        meta: {
            layoutClass: 'dashboard-rtl',
            layout: "dashboard-rtl",
        },
        component: () => import('@/views/RTL.vue'),
    },
    {
        path: '/Profile',
        name: 'Profile',
        meta: {
            layoutClass: 'layout-profile',
            layout: "dashboard",
        },
        component: () => import('@/views/Profile.vue'),
    },
    {
        path: '/sign-in',
        name: 'Sign-In',
        component: () => import('@/views/Sign-In.vue'),
    },
    {
        path: '/sign-up',
        name: 'Sign-Up',
        meta: {
            layoutClass: 'layout-sign-up',
        },
        component: () => import('@/views/Sign-Up.vue'),
    },
]

declare module 'vue-router' {
    interface RouteMeta {
        // 布局
        layout?: string
    }
}

// Adding layout property from each route to the meta
// object so it can be accessed later.
function addLayoutToRoute(route: RouteRecordRaw, parentLayout = "default") {
    route.meta = route.meta || {};
    route.meta.layout = route.meta.layout || parentLayout;

    if (route.children) {
        route.children = route.children.map((childRoute) => addLayoutToRoute(childRoute, route.meta.layout));
    }
    return route;
}

routes = routes.map((route) => addLayoutToRoute(route));

 const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {
                selector: to.hash,
                behavior: 'smooth',
            }
        }
        return {
            x: 0,
            y: 0,
            behavior: 'smooth',
        }
    }
})

export default router