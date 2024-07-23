import LoadingCard from "@/components/Loadings/LoadingCard";
import React from "react";

const loading = () => {
  return (
    <div className="flex flex-col gap-2">
      <LoadingCard />
      <LoadingCard />
      <LoadingCard />
      <LoadingCard />
      <LoadingCard />
      <LoadingCard />
      <LoadingCard />
    </div>
  );
};

export default loading;
