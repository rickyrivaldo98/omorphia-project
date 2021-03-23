import React from "react";
import CardWorksDetail from "./Cards/CardWorksDetail";

const AdminWorksDetail = () => {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CardWorksDetail />
        </div>
      </div>
    </>
  );
};

export default AdminWorksDetail;
