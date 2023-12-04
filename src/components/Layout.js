import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Routing from "../Router/Routing";
const Layout = () => {
  return (
    <div className="container">
      <Header />
      <Routing />
      <Footer />
    </div>
  );
};

export default Layout;
