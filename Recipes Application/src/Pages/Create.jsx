import React from "react";
import { useForm } from "react-hook-form";
import { RecipesContext } from "../context/MainContext";
import { useContext } from "react";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();

  const [recipes, setRecipes] = useContext(RecipesContext);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const SubmitHandeler = (data) => {
    data.id = nanoid();
    const copyrecipes = [...recipes];
    copyrecipes.push(data);
    setRecipes(copyrecipes);
    localStorage.setItem('recipe' , JSON.stringify(copyrecipes))
    reset();
    navigate("/recipes");
  };

  return (
    <div className="p-12">
      <h1 className="border-b-2 text-center font-bold p-2 text-2xl mb-6 ">
        Create Your Recipes
      </h1>

      {/* Form Starting  */}

      <div>
        <form
          onSubmit={handleSubmit(SubmitHandeler)}
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

          <button className="px-4 py-2 bg-blue-600 text-white mt-12.5 rounded">
            Create Recipes
          </button>
        </form>
      </div>
    </div>
  );
};

export default Create;
