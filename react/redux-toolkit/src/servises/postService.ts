import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { Post } from '@src/models/Post'

export const postApi = createApi({
  reducerPath: 'postApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
  tagTypes: ['Post'],
  endpoints: (build) => ({
    fetchAllUsers: build.query<Post[], number>({
      query: (limit: 5) => ({
        url: '/posts',
        params: {
          _limit: limit
        }
      }),
      providesTags: () => ['Post']
    }),
    createPost: build.mutation<Post, Post>({
      query: (post) => ({
        url: '/posts',
        method: 'POST',
        body: post
      }),
      invalidatesTags: ['Post']
    }),
    updatePost: build.mutation<Post, Post>({
      query: (post) => ({
        url: `/posts/${post.id}`,
        method: 'PUT',
        body: post
      }),
      invalidatesTags: ['Post']
    }),
    deletePost: build.mutation<Post, Post>({
      query: (post) => ({
        url: `/posts/${post.id}`,
        method: 'DELETE',
        body: post
      }),
      invalidatesTags: ['Post']
    })
  })
})
