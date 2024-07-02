import React from "react";
import { SiteList } from "@/components/SiteList";
import { AdminInfo } from "@/components/AdminInfo";

export default function Dashboard() {
  return (
    <div className="flex justify-center w-screen h-screen py-20 gap-10">
      <AdminInfo />
      <SiteList />
    </div>
  );
}
