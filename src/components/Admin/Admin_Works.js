import React from "react";
import CardWorks from "./Cards/CardWorks";

const AdminWorks = () => {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CardWorks />
        </div>
      </div>
    </>
  );
};

export default AdminWorks;
