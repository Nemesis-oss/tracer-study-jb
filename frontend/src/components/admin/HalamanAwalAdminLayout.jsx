import React from "react";
import SidebarAdmin from "./SidebarAdmin/SidebarAdmin";
import ChartAdmin from "./ChartAdmin/ChartAdmin";
const HalamanAwalAdminLayout = () => {
  return (
    <div className="bg-gray-100">
      <div>
        <SidebarAdmin />
        <ChartAdmin />
      </div>
    </div>
  );
};

export default HalamanAwalAdminLayout;
