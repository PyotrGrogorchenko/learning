<template>
  <div class="app">
    <input-ui
      v-model="searchQuery"
      placeholder="Поиск..."
    />
    <div class="app__buttons">
      <button-ui
        @click="showDialog"
      >
        Создать пост
      </button-ui>
      <select-ui
        v-model="selectedSort"
        :options="sortOptions"
      ></select-ui>
    </div>
    <dialog-ui v-model:show="dialogVisible">
      <post-form
        @create="createPost"
      />
    </dialog-ui>
    <post-list
      :posts="sortedAndSearchedPosts"
      @remove="removePost"
      v-if="!isPostsLoading"
    />
    <div v-if="isPostsLoading">Идет загрузка...</div>
  </div>
</template>

<script>

import PostForm from '@/components/PostForm'
import PostList from '@/components/PostList'
import axios from 'axios'

export default {
  components: {
    PostForm, PostList
  },
  data () {
    return {
      posts: [],
      dialogVisible: false,
      isPostsLoading: false,
      selectedSort: '',
      searchQuery: '',
      sortOptions: [
        { value: 'title', name: 'По названию' },
        { value: 'body', name: 'По содержимому' }
      ]
    }
  },
  methods: {
    createPost (post) {
      this.posts.push(post)
      this.dialogVisible = false
    },
    removePost (post) {
      this.posts = this.posts.filter(p => p.id !== post.id)
    },
    showDialog () {
      this.dialogVisible = true
    },
    async fetchPosts () {
      try {
        this.isPostsLoading = true
        setTimeout(async () => {
          const res = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
          this.posts = res.data
          this.isPostsLoading = false
        }, 1000)
      } catch (e) {
        alert(e)
      }
    }
  },
  mounted () {
    this.fetchPosts()
  },
  computed: {
    sortedPosts () {
      const posts = [...this.posts]
      if (!this.selectedSort) {
        return posts
      }
      return posts.sort((p1, p2) => p1[this.selectedSort].localeCompare(p2[this.selectedSort]))
    },
    sortedAndSearchedPosts () {
      return this.sortedPosts.filter(p => p.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
    }
  },
  watch: {
    // selectedSort (newValue) {
    //   this.posts.sort((post1, post2) => post1[newValue].localeCompare(post2[newValue]))
    // }
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

.app__buttons {
  display: flex;
  justify-content: space-between;
}
</style>
