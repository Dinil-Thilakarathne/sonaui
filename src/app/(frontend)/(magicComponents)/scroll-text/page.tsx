import React from "react";
import ScrollText from "./ScrollText";

const page = () => {
  return (
    <div>
      <div className="h-[150vh]"></div>
      <ScrollText>Hello world!</ScrollText>
      <div className="h-[150vh]"></div>
    </div>
  );
};

export default page;
