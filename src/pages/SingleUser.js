import React, { useEffect, useState } from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'

export default function SingleCocktail() {
  const { name } = useParams()
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState(null)

 useEffect(() => {
    setLoading(true)
    async function getCocktail() {
      try {
        const response = await fetch(
          `https://api.github.com/search/users?q=${name}`
        )
        const data = await response.json()
  const {items} =data
  
        if (items) {
          const newUser = items.map((item) => {
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
         
          setUser(newUser[0])
        } else {
          setUser(null)
        }
      } catch (error) {
       
      }
      setLoading(false)
    }
    getCocktail()
  }, [name])

  if (loading) {
    return <Loading/>
  }
  if (!user) {
    return <h2 className='section-title'>no user to display</h2>
  } else {
   
    const {
      name,
      id,
      image,
      type
    } = user
    return (
      <section className='section cocktail-section'>
        <Link to='/' className='btn btn-primary'>
          back home
        </Link>
        <h2 className='section-title'>{name}</h2>
        <div className='drink'>
          <img src={image} alt={name} style={{width:"200px"}}></img>
          <div className='drink-info'>
            <p>
              <span className='drink-data'>name :</span> {name}
            </p>
            <p>
              <span className='drink-data'>Type :</span> {type}
            </p>
            <p>
              <span className='drink-data'>id :</span> {id}
            </p>
         
         
          </div>
        </div>
      </section>
    )
  }
}
