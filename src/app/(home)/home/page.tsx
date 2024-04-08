import Redirect from "@element/Redirect";

import React from "react";
async function page() {
  return (
    <div className="w-full h-full ">
      <Redirect url="/home/all" />
    </div>
  );
}

export default page;
