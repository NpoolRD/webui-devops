const devops = httpVueLoader('/main/devops.vue')
const devopsdt = httpVueLoader('/main/device-detail/devopsdt.vue')
const setting = httpVueLoader('/main/setting.vue')
const deviceDetail = httpVueLoader('/main/device-detail/devopsDeviceDetail.vue')
const routes = [
    { path: '/', name: '/', component: devops, },
    {
        path: '/home', name: 'home', component: devops,
        children: [
            {
                path: 'miner', name: 'miner', component: devops,
            },
        ]
    },
    { path: '/device/:index', name: 'device', component: devopsdt },
    { path: '/user/setting', name: 'setting', component: setting },
    { path: '/detail', name:'deviceDetail', component: deviceDetail},
]
const router = new VueRouter({
    routes: routes,
})
export { router }