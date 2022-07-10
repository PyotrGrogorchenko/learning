import { Post } from '@src/models/Post'
import { postApi } from '@src/servises/postService'
import { FC, useCallback, useEffect, useState } from 'react'
import { PostItem } from '../components/PostItem'

export const Posts: FC = () => {
  const [limit, setLimit] = useState(20)
  const { data: posts, error, isLoading, refetch } = postApi.useFetchAllUsersQuery(limit /* , { pollingInterval: 1000 }*/)
  const [createPost, { error: createError, isLoading: isCreateLoading }] = postApi.useCreatePostMutation()
  const [updatePost, {}] = postApi.useUpdatePostMutation()
  const [deletePost, {}] = postApi.useDeletePostMutation()

  const onCreate = useCallback(async () => {
    const title = prompt()
    if (!title) return
    await createPost({ title, body: title } as Post)
  }, [createPost])

  const onUpdate = useCallback((post: Post) => {
    updatePost(post)
  }, [updatePost])

  const onRemove = useCallback((post: Post) => {
    deletePost(post)
  }, [deletePost])
  // useEffect(() => {
  //   setTimeout(() => {
  //     setLimit(10)
  //   }, 1000)
  // }, [])

  return (
    <div>
      <button onClick={() => refetch()}>REFETCH</button>
      <button onClick={onCreate}>Add new post</button>
      {(isLoading || isCreateLoading) && <h1>Loading...</h1>}
      {(error || createError) && <h1>Failed to load</h1>}
      {posts && posts.map((post) => <PostItem key={post.id} post={post} update={onUpdate} remove={onRemove}/>)}
    </div>
  )
}
