import React from 'react'
import {useForm} from 'react-hook-form'

const Create = () => {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()


  return (
    <div className='p-12'>
      <h1 className="border-b-2 text-center font-bold p-2 text-2xl mb-6 ">Create Your Recipes</h1>


      <div className='flex flex-col justify-center items-center border-amber-100'>

<form >
   <input className='border-b-2 p-2 mb-2' type="text"  placeholder="Enter your Recipes name"/>


        <textarea  placeholder='Enter your Recipes Ingridients' className='w-70 border-b-2 p-2 mb-2' type="text"></textarea>



        <textarea placeholder='Enter your Recipes Description' className='w-70 border-b-2 p-2 mb-2' type="text"></textarea>


        <select className='w-80 mt-8 border bg-amber-600 text-white rounded px-4 py-2 font-bold' name="" id="">
          <option className='text-white font-bold ' value="ind">Indian</option>
          <option className='text-white font-bold ' value="ita">Italian</option>
          <option className='text-white font-bold ' value="thai">Thai</option>
        </select>

           <button className='px-4 py-2 bg-blue-600 text-white mt-[50px] rounded'>Create Recipes</button>
</form>
       
      </div>
    </div>
  )
}

export default Create
