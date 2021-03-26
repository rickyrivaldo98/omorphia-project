import React from "react";
import CardCategory from "./Cards/CardCategory";

const AdminCategory = () => {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CardCategory />
        </div>
      </div>
    </>
  );
};

export default AdminCategory;
