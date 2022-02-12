import React, { useEffect, useMemo, useState } from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'
export default function Topuser() {
 
  const [loading, setLoading] = useState(false)
  const [country, setCountry] = useState('bangladesh')
  const [value, setValue] = useState([])


 useEffect(() => {
    setLoading(true)
    async function getTopUser() {
      try {
        const response = await fetch(
          `https://api.github.com/search/users?q=location:${country}+followers:%3E1000`
        )
        const data = await response.json()
        const {items} = data
        setValue(items)
      } catch (error) {
       
      }
      setLoading(false)
    }
    getTopUser()
  }, [country])
  if (loading) {
    return <Loading/>
  }
  const handleChange = (e) => {
   
    setCountry(e.target.value)
  }
    
    return (
      <>
         <select value={country} onChange={handleChange} style={{padding:"10px",margin:"20px",width:"200px"}}>
                 <option value="bangladesh">bangladesh</option>
                 <option value="india">india</option>
                 <option value="usa">usa</option>
                 <option value="pakistan">pakistan</option>
                 
               </select>
      
               <div className='cocktails-center'>
            
            {
                value.map((item, key) =>(
                  
                                <article className='cocktail' key={item.id}>
                            <div className='img-container'>
                                <img src={item.avatar_url} alt={item.login} />
                            </div>
                            <div className='cocktail-footer'>
                                <h3>{item.login}</h3>
                                <h4>{item.type}</h4>
                              
                            </div>
                    </article>
                   
                   
                ))
            }
          
        </div>
    
      </>
      
    )
  
}
