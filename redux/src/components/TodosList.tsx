import { FC, useEffect } from 'react'
import { useTypedSelector } from '@src/hooks/useTypedSelector'
import { useAction } from '@src/hooks/useAction'

export const TodosList: FC = () => {
  const { todos, error, isLoading, page, limit } = useTypedSelector((state) => state.todo)
  const { fetchTodos, setTodoPage } = useAction()
  const pages = [1, 2, 3, 4, 5]
  useEffect(() => {
    fetchTodos(page, limit)
  }, [page])

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  if (error) {
    return <h1>Error: {error}</h1>
  }

  return (
    <div>
      {todos.map((todo) =>
        <div key={todo.id}>{todo.id}&nbsp;{todo.title}&nbsp;{`completed: ${todo.completed}`}</div>
      )}
      <div style={{ display: 'flex' }}>
        {pages.map((p) =>
          <div
            onClick={() => setTodoPage(p)}
            key={p}
            style={{ border: p === page ? '2px solid green' : '1px solid grey', padding: 10 }}
          >
            {p}
          </div> )}
      </div>
    </div>
  )
}
