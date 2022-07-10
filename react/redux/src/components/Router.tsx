import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import { NotFound } from '@src/pages/NotFound'
import { Home } from '@src/pages/Home'
import { Users } from '@src/pages/Users'
import { Todos } from '@src/pages/Todos'

export const Router: FC = () => (
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/users' element={<Users/>}/>
    <Route path='/todos' element={<Todos/>}/>
    <Route path='*' element={<NotFound/>}/>
  </Routes>
)
