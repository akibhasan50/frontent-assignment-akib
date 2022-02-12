import React from 'react'
import User from './User'
import Loading from './Loading'
import { useGlobalContext } from '../context'

export default function UserList() {
  const { users, loading } = useGlobalContext()
  if (loading) {
    return <Loading/>
  }
  if (users.length < 1) {
    return (
      <h2 className='section-title'>
        no user matched your search criteria
      </h2>
    )
  }
  return (
    <section className='section'>
      <h2 className='section-title'>Users</h2>
      <div className='cocktails-center'>
        {users.map((item) => {
          return <User key={item.id} {...item} />
        })}
      </div>
    </section>
  )
}
