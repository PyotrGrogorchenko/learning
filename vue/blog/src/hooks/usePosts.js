import axios from 'axios'
import { ref, onMounted } from 'vue'

export default function usePosts (limit) {
  const posts = ref([])
  const totalPages = ref(0)
  const isPostsLoading = ref(false)
  const fetching = async () => {
    try {
      isPostsLoading.value = true
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts', {
        params: {
          _page: this.page,
          _limit: this.limit
        }
      })
      totalPages.value = Math.ceil(res.headers['x-total-count'] / limit)
      posts.value = res.data
    } catch (e) {
      alert(e)
    } finally {
      isPostsLoading.value = false
    }
  }

  onMounted(fetching)

  return {
    posts, isPostsLoading, totalPages
  }
}
