import "../styles/globals.css";
import type { AppProps } from "next/app";
import Routing from "../routers/routing";
import React from "react";
// import AuthProvider from "@/src/context/AuthProvider";
import Home from "./index";

const MyApp = ({ Component, pageProps, router }: AppProps) => {
  return (
    <Home />

  );
};

export default React.memo(MyApp);
