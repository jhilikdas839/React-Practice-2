import React from "react";
import { useNavigate } from "react-router-dom";


const Product = () => {

    const navigate = useNavigate()
  const arr = [
    {
        id:1,
        Course:"Frontend"
    },
     {
        id:2,
        Course:"Backend"
     }
];

const list = arr.map((elem)=>{
    return(
         <div key={elem.id}  
          onClick={()=>{
            navigate(`/product/${elem.id}`)
            
          }}
         className="w-35 h-35 bg-sky-600 rounded flex justify-center items-center  active:scale-95">
            
        <h1>{elem.Course}</h1>
      </div>
    )
    
})
  return (
    <div className="w-full h-screen flex justify-center items-center gap-4 flex-wrap">
     {list}
    </div>
  );
};

export default Product;
