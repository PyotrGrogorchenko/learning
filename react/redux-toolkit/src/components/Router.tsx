import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import { NotFound } from '@src/pages/NotFound'
import { Home } from '@src/pages/Home'
import { Users } from '@src/pages/Users'
import { Posts } from '@src/pages/Posts'

export const Router: FC = () => (
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/users' element={<Users/>}/>
    <Route path='/posts' element={<Posts/>}/>
    <Route path='*' element={<NotFound/>}/>
  </Routes>
)
