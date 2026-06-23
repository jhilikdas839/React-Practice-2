import React from "react";
import { useParams } from "react-router-dom";
import { RecipesContext } from "../context/MainContext";
import { useContext } from "react";
import { useState } from "react";

//from uses import
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";

const SingleRecipes = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [recipes, setRecipes] = useContext(RecipesContext);
  const SingleRecipes = recipes.find((recipe) => recipe.id === params.id);

  //form function

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      Name: SingleRecipes?.Name,
      Ingridients: SingleRecipes?.Ingridients,
      Description: SingleRecipes?.Description,
      Category: SingleRecipes?.Category,
    },
  });
  // Update Handeler
  const UpdateHandeler = (newData) => {
    const index = recipes.findIndex((recipe) => recipe.id === params.id);
    const CopyData = [...recipes];
    CopyData[index] = { ...CopyData[index], ...newData };
    setRecipes(CopyData);
    localStorage.setItem("recipe", JSON.stringify(CopyData));
    navigate("/recipes");
  };

  //Delete button function work

  const DeleteHandeler = () => {
    const filterData = recipes.filter((r) => r.id != params.id);
    setRecipes(filterData);
    localStorage.setItem("recipe", JSON.stringify(filterData));
    navigate("/recipes");
  };

  // Fav feature code date = 23.06.26

  const [favourite, setfavourite] = useState(
    JSON.parse(localStorage.getItem("fav")) || [],
  );

  const FavHandeler = () => {
    const copyfav = [...favourite]
   copyfav.push(SingleRecipes)
   setfavourite(copyfav)
   localStorage.setItem("fav",JSON.stringify(copyfav))
  };

  const UnFavHandeler = () => {
     const favfilter = favourite.filter((f)=>f.id != SingleRecipes?.id)
     setfavourite(favfilter)
     localStorage.setItem("fav",JSON.stringify(favfilter))
  };
   
  return (
    <>
      <div className="flex gap-4 m-6 justify-between p-10">
        {favourite.find((f) => f.id == SingleRecipes?.id) ? (
          <i
            onClick={UnFavHandeler}
            className="absolute text-4xl left-[40%] text-red-400   ri-heart-3-fill"
          ></i>

        ) : (
          <i
            onClick={FavHandeler}
            className="absolute text-4xl  left-[40%]  ri-heart-line"
          ></i>
          
        )}

        <div flex flex-col>
          <h1 className=" text-6xl font-bold">{SingleRecipes?.Name}</h1>
          <h4 className=" text-2xl font-bold">{SingleRecipes?.Ingridients}</h4>
          <h3 className=" text-2xl font-bold">{SingleRecipes?.Description}</h3>
          <h2 className=" text-2xl font-bold">{SingleRecipes?.Category}</h2>
        </div>
        {/* Form design */}

        <div className="ml-80">
          <form
            onSubmit={handleSubmit(UpdateHandeler)}
            className="flex flex-col justify-center items-center border-amber-100"
          >
            <input
              {...register("Name")}
              className="border-b-2 p-2 mb-2"
              type="text"
              placeholder="Enter your Recipes name"
            />

            <textarea
              {...register("Ingridients")}
              placeholder="Enter your Recipes Ingridients"
              className="w-70 border-b-2 p-2 mb-2"
              type="text"
            ></textarea>

            <textarea
              {...register("Description")}
              placeholder="Enter your Recipes Description"
              className="w-70 border-b-2 p-2 mb-2"
              type="text"
            ></textarea>

            <select
              {...register("Category")}
              defaultValue=""
              className="w-80 mt-8 border bg-amber-600 text-white rounded px-4 py-2 font-bold"
            >
              <option value="" disabled>
                Select Category
              </option>

              <option value="Indian">Indian</option>
              <option value="Italian">Italian</option>
              <option value="Thai">Thai</option>
            </select>

            <button
              onClick={UpdateHandeler}
              className="px-4 py-2 bg-blue-600 text-white mt-12.5 rounded"
            >
              Update
            </button>

            <button
              onClick={DeleteHandeler}
              className="px-4 py-2 bg-red-600 text-white mt-12.5 rounded"
            >
              Delete
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SingleRecipes;
