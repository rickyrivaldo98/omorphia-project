import React from "react";
import CardStats from "./CardStats";

const CardDashboard = () => {
  return (
    <>
      {/* Header */}
      <div className="relative bg-admin md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}

            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 xl:w-5/12 px-4">
                <CardStats
                  statSubtitle="Messages Contact"
                  statTitle="350,897"
                  statArrow="up"
                  statPercent="3.48"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Since last month"
                  statIconName="far fa-chart-bar"
                  statIconColor="bg-red-500"
                />
              </div>

              <div className="w-full lg:w-6/12 xl:w-5/12 px-4">
                <CardStats
                  statSubtitle="Work Images Uploaded"
                  statTitle="924"
                  statArrow="down"
                  statPercent="1.10"
                  statPercentColor="text-orange-500"
                  statDescripiron="Since yesterday"
                  statIconName="fas fa-users"
                  statIconColor="bg-pink-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardDashboard;
