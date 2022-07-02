import { FC, useCallback } from 'react'
import { Post } from '@src/models/Post'

type Props = {
  post: Post
  remove: (post: Post) => void
  update: (post: Post) => void
}

export const PostItem: FC<Props> = ({ post, remove, update }) => {
  const onRemove = useCallback((e: OnClick) => {
    e.stopPropagation()
    remove(post)
  }, [post, remove])

  const onUpdate = useCallback((e: OnClick) => {
    e.stopPropagation()
    const title = prompt()
    if (!title) return
    update({ ...post, title: title })
  }, [post, update])

  return (
    <div onClick={onUpdate}>
      {post.id}&nbsp;{post.title}
      &nbsp;
      <button onClick={onRemove}>Delete</button>
    </div>
  )
}
