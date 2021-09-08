import Vue from 'vue';
import VueRouter from 'vue-router';
import './bootstrap';

import PostList from './PostList.vue';
import Post from './Post.vue';

import ApolloClient from 'apollo-boost'
import VueApollo from 'vue-apollo'

import TopicPostList from './TopicPostList.vue';
import AuthorPostList from './AuthorPostList.vue';
import NotFound from './NotFound.vue';

import moment from 'moment';


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
        path:'/authors/:id',
        name: 'author', 
        component: AuthorPostList
    },
    
    {
        path:'/post/:id',
        name: 'post',
        component: Post
    },
    {
        path:'*',
        name:'404', 
        component: NotFound
    },
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


Vue.filter("timeago", value=>moment(value).fromNow());
Vue.filter("longDate", value=>moment(value).format("MMMM Do YYYY"));

const app = new Vue({
    el: '#app',
    apolloProvider,
    router
});
