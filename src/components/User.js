import React from 'react'
import { Link } from 'react-router-dom'
export default function User({ image, name, id, type }) {
  return (
    <article className='cocktail'>
      <div className='img-container'>
        <img src={image} alt={name} />
      </div>
      <div className='cocktail-footer'>
        <h3>{name}</h3>
        <h4>{type}</h4>
        <Link to={`/user/${name}`} className='btn btn-primary btn-details'>
          details
        </Link>
      </div>
    </article>
  )
}
