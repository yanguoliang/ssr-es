import Vue from './node_modules/vue/dist/vue.esm.mjs';
import VueRouter from './node_modules/vue-router/dist/vue-router.esm.mjs'
Vue.config.devtools = true;
Vue.use(VueRouter);
export const createRouter = (context = {}) => {
    const Foo = { template: '<div>foo</div>' }
    const Bar = { template: '<div>bar</div>' }
    const routes = [
        { path: '/foo', component: Foo },
        { path: '/bar', component: Bar }
    ]
    return new VueRouter({
        mode: "history",
        base: "/app",
        routes
    })
}

export const createApp = (context = {}) => {
    const router = createRouter(context);
    const app = new Vue({
        router,
        template: `<div id="app">
            <router-link to="/foo">foo</router-link>
            <router-link to="/bar">bar</router-link>
            <span>hello {{str}}</span>
            <router-view></router-view>
        </div>`,
        data() {
            return {
                str: '呵呵呵'
            }
        },
        created() {
            console.log('created');
        },
        mounted() {
            console.log('mounted');
            setTimeout(() => {
                this.str = '123'
            }, 1000)
        }
    });
    return { app, router }
}