import { TodosList } from '@src/components/TodosList'
import { FC } from 'react'

export const Todos: FC = () => {
  return (
    <div>
      <h1>Todos</h1>
      <TodosList/>
    </div>
  )
}
