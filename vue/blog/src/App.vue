<template>
  <div class="app">
    <post-form
      @create="createPost"
    />
    <post-list
      :posts="posts"
    />
  </div>
</template>

<script>

import PostForm from '@/components/PostForm'
import PostList from '@/components/PostList'

export default {
  components: {
    PostForm, PostList
  },
  data () {
    return {
      posts: [
        { id: 1, title: 'Заголовок 1', body: 'Содержание 1' },
        { id: 2, title: 'Заголовок 2', body: 'Содержание 2' },
        { id: 3, title: 'Заголовок 3', body: 'Содержание 3' }
      ]
    }
  },
  methods: {
    createPost (post) {
      this.posts.push(post)
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  padding: 20px;
}
</style>
