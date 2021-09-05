import Vue from 'vue';
import VueRouter from 'vue-router';
import './bootstrap';

import PostList from './PostList.vue';
import Post from './Post.vue';

import ApolloClient from 'apollo-boost'
import VueApollo from 'vue-apollo'

import TopicPostList from './TopicPostList.vue'



window.Vue = require('vue');
Vue.use(VueRouter);


const routes = [
    {
        path:'/',
        name: 'index', 
        component: PostList
    },
    {
        path:'/topics/:slug',
        name: 'topic', 
        component: TopicPostList
    },
    {
        path:'/post/:id',
        name: 'post',
        component: Post
    }
];

Vue.use(VueApollo);

const apolloClient = new ApolloClient({
  // You should use an absolute URL here
  uri: 'http://127.0.0.1:8000/graphql'
});

const apolloProvider = new VueApollo({
    defaultClient: apolloClient,
  });

const router = new VueRouter({
    mode: 'history',
    routes
});

const app = new Vue({
    el: '#app',
    apolloProvider,
    router
});
