import React, { Suspense } from "react";
import Loading from "./loading";
import PlaceholderList from "@/components/PlaceholderList";

const page = () => {
  return (
    <div className="p-4">
      <h1>Page with loading</h1>
      <p></p>
      <div>
        <Suspense fallback={<Loading />}>
          <PlaceholderList />
        </Suspense>
      </div>
    </div>
  );
};

export default page;
