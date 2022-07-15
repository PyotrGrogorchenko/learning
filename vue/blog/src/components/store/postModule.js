import axios from 'axios'

export const postModule = {
  state: () => ({
    posts: [],
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
  }),
  getters: {
    sortedPosts (state) {
      if (!state.selectedSort) {
        return state.posts
      }
      const posts = [...state.posts]
      return posts.sort((p1, p2) => p1[state.selectedSort].localeCompare(p2[state.selectedSort]))
    },
    sortedAndSearchedPosts (state, getters) {
      return getters.sortedPosts.filter(p => p.title.toLowerCase().includes(state.searchQuery.toLowerCase()))
    }
  },
  mutations: {
    setPosts (state, posts) {
      state.posts = posts
    },
    setLoading (state, val) {
      state.isPostsLoading = val
    },
    setSelectedSort (state, val) {
      state.selectedSort = val
    },
    setSarchQuery (state, val) {
      state.searchQuery = val
    },
    setPage (state, val) {
      state.page = val
    },
    setTotalPages (state, val) {
      state.totalPages = val
    }
  },
  actions: {
    async fetchPosts ({ state, commit }) {
      try {
        commit('setLoading', true)
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _page: state.page,
            _limit: state.limit
          }
        })
        commit('setTotalPages', Math.ceil(res.headers['x-total-count'] / this.limit))
        commit('setPosts', res.data)
      } catch (e) {
        alert(e)
      } finally {
        commit('setLoading', false)
      }
    },
    async fetchMorePosts ({ state, commit }) {
      try {
        commit('setPage', state.page + 1)

        const res = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _page: state.page,
            _limit: state.limit
          }
        })
        commit('setPosts', [...state.posts, ...res.data])
      } catch (e) {
        alert(e)
      }
    }
  },
  namespaced: true

}
