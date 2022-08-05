import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div>
      <h1>Это домашняя страница</h1>
      <Link to='/workspace'>
        <button>To workspace</button>
      </Link>
    </div>
  )
}

export default HomePage
