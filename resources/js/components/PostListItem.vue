<template>
    <div>
        <router-link :to="{name: 'post', params: {id: post.id}}">
            <h4 class="text-2xl pb-3 font-semibold hover:underline">{{ post.title }}</h4>
        </router-link>
        <p class="text-gray-600 pb-3">{{ post.lead }} </p>
        <div class="text-sm text-gray-600">
            By&nbsp;&nbsp; 
            <router-link :to="{name: 'author', params: {id: post.author.id}}" class="underline hover:text-indigo-800" >
                {{ post.author.name }}
            </router-link>&nbsp;in 
            <router-link :to="{name: 'topic', params: {slug: post.topic.slug}}" class="underline hover:text-red-500" >
                {{ post.topic.name }}&nbsp;.
            </router-link> {{ post.created_at | timeago }}
        </div>
    </div>
</template>
<script>
export default {
    props:{
        post: Object
    }
}
</script>