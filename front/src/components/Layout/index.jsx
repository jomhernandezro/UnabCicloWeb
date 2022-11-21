import React from "react";
import Main from "../Main";
import Header from "./Header";
const Layout = ( {children }) => {
  return (
    <>
      <Header />
      {children}
      <Main />
    </>
  );
}
export default Layout