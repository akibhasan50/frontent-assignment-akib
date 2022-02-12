import React from 'react'
import UserList from '../components/UserList'
import SearchForm from '../components/SearchForm'
import Footer from './Footer'
export default function Home() {
  
  return (
    <main>
      <SearchForm />
      <UserList />
      <Footer></Footer>
    </main>
  )
}
