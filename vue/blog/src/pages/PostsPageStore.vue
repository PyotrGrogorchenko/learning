<template>
  <div>
    <input-ui
      :model-value="searchQuery"
      @update:model-value="setSarchQuery"
      placeholder="Поиск..."
    />
    <div class="app__buttons">
      <button-ui
        @click="showDialog"
      >
        Создать пост
      </button-ui>
      <select-ui
        :model-value="selectedSort"
        @update:model-value="setSelectedSort"
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
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex'

import PostForm from '@/components/PostForm'
import PostList from '@/components/PostList'

export default {
  components: {
    PostForm, PostList
  },
  data () {
    return {
      dialogVisible: false
    }
  },
  methods: {
    ...mapMutations({
      setPage: 'post/setPage',
      setSarchQuery: 'post/setSarchQuery',
      setSelectedSort: 'post/setSelectedSort'
    }),
    ...mapActions({
      fetchMorePosts: 'post/fetchMorePosts',
      fetchPosts: 'post/fetchPosts'
    }),
    showDialog () {
      this.dialogVisible = true
    }
  },
  mounted () {
  },
  computed: {
    ...mapState({
      posts: state => state.post.posts,
      isPostsLoading: state => state.post.isPostsLoading,
      selectedSort: state => state.post.selectedSort,
      searchQuery: state => state.post.searchQuery,
      page: state => state.post.page,
      limit: state => state.post.limit,
      totalPages: state => state.post.totalPages,
      sortOptions: state => state.post.sortOptions
    }),
    ...mapGetters({
      sortedPosts: 'post/sortedPosts',
      sortedAndSearchedPosts: 'post/sortedAndSearchedPosts'
    })
  },
  watch: {
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
