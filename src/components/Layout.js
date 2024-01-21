import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Routing from "../Router/Routing";
import { useSelector } from "react-redux";
import { pathNavigatore } from "../util";
const Layout = () => {
  const { isLogin } = useSelector((store) => store.users);

  return (
    <div className="container">
      {isLogin ? (
        <>
          <Header />
          {/* <Routing /> */}
          <Footer />
        </>
      ) : (
        <Routing />
      )}
    </div>
  );
};

export default Layout;
