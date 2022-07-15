<template>
  <div>
    <input-ui
      v-model="searchQuery"
      placeholder="Поиск..."
    />
    <div class="app__buttons">
      <button-ui
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
  </div>
</template>

<script>

import PostForm from '@/components/PostForm'
import PostList from '@/components/PostList'
import usePosts from '@/hooks/usePosts'
import useSortedPosts from '@/hooks/useSortedPosts'
import useSortedAndSearchedPosts from '@/hooks/useSortedAndSearchedPosts'

export default {
  components: {
    PostForm, PostList
  },
  data () {
    return {
      dialogVisible: false,
      sortOptions: [
        { value: 'title', name: 'По названию' },
        { value: 'body', name: 'По содержимому' }
      ]
    }
  },
  methods: {
  },
  mounted () {
  },
  computed: {
  },
  watch: {
  },
  setup (props) {
    const { posts, isPostsLoading, totalPages } = usePosts(10)
    const { sortedPosts, selectedSort } = useSortedPosts(posts)
    const { searchQuery, sortedAndSerchedPosts } = useSortedAndSearchedPosts(sortedPosts)

    return {
      posts,
      isPostsLoading,
      totalPages,
      sortedAndSerchedPosts,
      searchQuery,
      selectedSort
    }
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
