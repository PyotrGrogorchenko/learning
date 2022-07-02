import { FC, useEffect } from 'react'
import { useTypedSelector } from '@src/hooks/useTypedSelector'
import { useAction } from '@src/hooks/useAction'

export const UsersList: FC = () => {
  const { users, error, isLoading } = useTypedSelector((state) => state.user)
  const { fetchUsers } = useAction()
  useEffect(() => {
    fetchUsers()
  }, [])

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  if (error) {
    return <h1>Error: {error}</h1>
  }

  return (
    <div>
      {users.map((user) =>
        <div key={user.id}>{user.id}&nbsp;{user.name}&nbsp;{user.email}</div>
      )}
    </div>
  )
}
