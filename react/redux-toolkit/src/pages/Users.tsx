import { useAppDispatch, useAppSelector } from '@src/hooks/redux'
import { fetchUsers } from '@src/store/reducers/actionCreators'
import { FC, useEffect } from 'react'

export const Users: FC = () => {
  const dispatch = useAppDispatch()
  const { users, isLoading, error } = useAppSelector((state) => state.userReducer)

  useEffect(() => {
    dispatch(fetchUsers())
  }, [])
  return (
    <div>
      {isLoading && <h1>Идет загрузка...</h1>}
      {error && <h1>{error}</h1>}
      <div>{JSON.stringify(users, null, 2)}</div>
    </div>
  )
}
