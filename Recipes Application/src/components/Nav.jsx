import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='w-full h-12 bg-gray-950 text-md font-bold flex gap-10 justify-center items-center '>
      <NavLink to="/" >Home</NavLink>
      <NavLink to="/recipes">Recipes</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/create">Create</NavLink>
    </div>
  )
}

export default Nav
