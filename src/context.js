import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

const url = 'https://api.github.com/search/users?q='
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('react')
  const [users, setUsers] = useState([])

  const fetchUsers = useCallback( async () => {
    setLoading(true)
    try {
      const response = await fetch(`${url}${searchTerm}`)
      const data = await response.json()
      const { items } = data

      if (items) {
        const newUsers = items.map((item) => {
          const {
            login,
            id,
            avatar_url,
            type
           
          } = item

          return {
            name:login,
            id:id,
            image: avatar_url,
            type:type
          
          }
        })
        setUsers(newUsers)
      } else {
        setUsers([])
      }
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  },[searchTerm])
  useEffect(() => {
    fetchUsers()
  }, [searchTerm,fetchUsers])
  return (
    <AppContext.Provider
      value={{ loading, users, searchTerm, setSearchTerm }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
