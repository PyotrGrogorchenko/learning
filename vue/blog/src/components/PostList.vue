<template>
  <div v-if="posts.length">
    <h3>Список постов</h3>
    <transition-group name="post-list">
      <post-item
        v-for="post in posts"
        :key="post.id"
        :post="post"
        @remove="$emit('remove', post)"
      />
    </transition-group>
  </div>
  <h2 v-else>Список постов пуст</h2>
</template>

<script>

import PostItem from '@/components/PostItem'

export default {
  components: {
    PostItem
  },
  props: {
    posts: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.post-list-item {
  display: inline-block;
  margin-right: 10px;
}
.post-list-enter-active, .post-list-leave-active {
  transition: all .5s;
}
.post-list-enter, .post-list-leave-to {
  opacity: 0;
  transform: translateX(200px);
}

.post-list-move {
  transition: transform 1s;
}
</style>
