var VueRouter = require('vue-router');
import Pagea from '../page/pagea.vue';
import Pageb from '../page/pageb.vue';
var router = new VueRouter({
    routes: [{
        name: 'Pagea',
        path: '/pagea',
        component: Pagea
    }, {
        name: 'Pageb',
        path: '/pageb',
        component: Pageb
    }, {
        path: '*',
        component: Pagea
    }, {
        path: '/',
        redirect: '/Pagea'
    }]
});
export default router;