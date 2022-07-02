import { useAppDispatch } from '@src/hooks/redux'
import { fetchUsers } from '@src/store/reducers/actionCreators'
import { FC, useEffect } from 'react'

export const Home: FC = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchUsers())
  }, [])
  return (
    <div>
      <h1>Home</h1>
    </div>
  )
}
