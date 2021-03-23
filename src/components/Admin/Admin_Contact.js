import React from "react";
import CardDashboard from "./Cards/CardDashboard";
import CardTable from "./Cards/CardTable";
const AdminContact = () => {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CardTable />
        </div>
      </div>
    </>
  );
};

export default AdminContact;
