import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from "../Pages/Home";
import About from "../Pages/About";
import Create from "../Pages/Create";
import Recipes from "../Pages/Recipes";
import Fav from "../Pages/Fav";
import Not from "../Pages/Not";
import SingleRecipes from "../Pages/SingleRecipes";

const MainRoutes = () => {
  return (
    <div className='flex'>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/create" element={<Create/>}/>
        <Route path="/recipes" element={<Recipes/>}/>
        <Route path="/recipes/details/:id" element={<SingleRecipes/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/fav" element={<Fav/>}/>
        <Route path="*" element={<Not/>}/>
      </Routes>
    </div>
  )
}

export default MainRoutes
