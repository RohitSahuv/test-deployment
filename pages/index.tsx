import type { NextPage } from "next";
import React from "react";

const Home: NextPage = () => {
  return <div className="text-center">Hello, world!</div>;
};

export default React.memo(Home);