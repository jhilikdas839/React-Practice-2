import React from 'react'
import { RecipesContext } from "../context/MainContext";
import { useContext } from "react";
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom'

const Fav = () => {
 const favourite = JSON.parse(localStorage.getItem("fav")) || [];
  
 
const MapRecipes = favourite.map((e)=> {
    
    return (
      <div className='w-60 h-40 bg-blue-600 rounded p-6 font-medium' key={e.id}>
        <Link to={`/recipes/details/${e.id}`}>
        <h1>Title:{e.Name}</h1>
        <p>Ingridients:{e.Ingridients}</p>
        <p>Description:{e.Description}</p>
        <h2>Category:{e.Category}</h2>
        </Link>
      </div>
    )
  })

  return (
    <div className='p-12 flex gap-4 flex-wrap'>
      {MapRecipes}
    </div>
  )
}

export default Fav