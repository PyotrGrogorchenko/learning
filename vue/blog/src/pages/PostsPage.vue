<template>
  <div>
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
    <div v-intersection="fetchMorePosts" ref="observer" class="observer"></div>
    <!-- <div
      class="page__wrapper"
    >
      <div
        :key="currentPage"
        v-for="currentPage in totalPages"
        class="page"
        @click="chengePage(currentPage)"
        :class="{
          'page_current': page === currentPage
        }"
      >
        {{ currentPage }}
      </div>
    </div> -->
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
      page: 1,
      limit: 10,
      totalPages: 0,
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
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _page: this.page,
            _limit: this.limit
          }
        })
        this.totalPages = Math.ceil(res.headers['x-total-count'] / this.limit)
        this.posts = res.data
      } catch (e) {
        alert(e)
      } finally {
        this.isPostsLoading = false
      }
    },
    async fetchMorePosts () {
      try {
        this.page += 1
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _page: this.page,
            _limit: this.limit
          }
        })
        this.totalPages = Math.ceil(res.headers['x-total-count'] / this.limit)
        this.posts = [...this.posts, ...res.data]
      } catch (e) {
        alert(e)
      }
    }
    // chengePage (page) {
    //   this.page = page
    //   this.fetchPosts()
    // }
  },
  mounted () {
    this.fetchPosts()
  },
  computed: {
    sortedPosts () {
      if (!this.selectedSort) {
        return this.posts
      }
      const posts = [...this.posts]
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
.app__buttons {
  display: flex;
  justify-content: space-between;
}

.page__wrapper {
  display: flex;
  margin-top: 15px;
}

.page {
  border: 1px solid black;
  padding: 10px;
}

.page_current {
  border: 2px solid teal;
}

.observer {
  height: 30px;
  background: green;
}
</style>
