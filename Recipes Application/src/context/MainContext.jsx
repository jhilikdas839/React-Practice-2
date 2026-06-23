import React from 'react'
import { useState } from 'react';
import { createContext } from 'react';
import { useEffect } from 'react';

export const RecipesContext = createContext(null);
const MainContext = (props) => {
    const [recipes, setRecipes] = useState([])

useEffect(() => {
  
setRecipes(JSON.parse(localStorage.getItem('recipe')) || [])

 
}, []); 

  return (
    <div>
     <RecipesContext.Provider value={[recipes, setRecipes]} >
        {props.children}
     </RecipesContext.Provider>
    </div>
  )
}

export default MainContext
