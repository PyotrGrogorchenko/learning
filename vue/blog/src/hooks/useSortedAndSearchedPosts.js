import { ref, computed } from 'vue'

export default function useSortedAndSearchedPosts (sortedPosts) {
  const searchQuery = ref('')

  const sortedAndSerchedPosts = computed(() => {
    return sortedPosts.value.filter(p => p.title.toLowerCase().includes(searchQuery.value.toLowerCase()))
  })

  return {
    searchQuery, sortedAndSerchedPosts
  }
}
