import React, { useEffect, useMemo, useState } from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'
export default function TopRepo() {
 
  const [loading, setLoading] = useState(false)
  const [value, setValue] = useState([])


 useEffect(() => {
    setLoading(true)
    async function getTopUser() {
      try {
        const response = await fetch(
          `https://api.github.com/search/repositories?q=stars:>1000`
        )
        const data = await response.json()
        const {items} = data
        setValue(items)
      } catch (error) {
       
      }
      setLoading(false)
    }
    getTopUser()
  }, [])
  if (loading) {
    return <Loading/>
  }

    
    return (
        <div className='cocktails-center' style={{padding:"10px"}}>

            {
             value.length > 0 && value.map((item, key) =>(
                  
                                <article className='cocktail' key={item.id}>
                         
                            <div className='cocktail-footer'>
                                <h3>Star :{item.stargazers_count}</h3>
                                
                                <h4>Forks :{item.forks}</h4>                    
                                <h5>Default branch :{item.default_branch}</h5>                    
                                <h5>Created at :{item.created_at}</h5>                    
                                <h5>Id :{item.id}</h5>
                                <p>{item.description}</p>
                              
                            </div>
                    </article>
                   
                   
                ))
            }
          
        </div>
    
    )
  
}
