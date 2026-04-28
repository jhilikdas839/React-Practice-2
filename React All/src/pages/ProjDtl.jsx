import React from "react";
import { useParams } from "react-router-dom";

const ProjDtl = () => {
  const { id } = useParams();

  const arr = [
    {
      id: 1,
      Course: "Frontend",
    },
    {
      id: 2,
      Course: "Backend",
    },
  ];

  const data = arr.find((e)=>
    {
      return e.id==id
    }
)

  return (
    <div>
      <h1 className="text-8xl font-bold text-center mt-30">
        {data?.Course}
      </h1>
    </div>
  );
};

export default ProjDtl;
