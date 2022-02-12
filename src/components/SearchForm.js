import React, { useEffect, useRef } from 'react'
import { useGlobalContext } from '../context'
export default function SearchForm() {
  const { setSearchTerm } = useGlobalContext()
  const searchValue = useRef('')

  useEffect(() => {
    searchValue.current.focus()
  }, [])

  function handleChange() {
    setSearchTerm(searchValue.current.value)
  }
  function handleSubmit(e) {
    e.preventDefault()
  }
  return (
    <section className='section search'>
      <form className='search-form' onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='name'>search by user or repository</label>
          <input
            type='text'
            name='name'
            id='name'
            ref={searchValue}
            onChange={handleChange}
          />
        </div>
      </form>
    </section>
  )
}
