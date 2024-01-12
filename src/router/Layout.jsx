import React, { Fragment } from "react";
import Header from "../pages/common/HeaderLandingpage";
import Footer from "../pages/common/Footer";

const Layout = ({ children }) => {
  const headerHeight = document.getElementById("header")?.clientHeight
    ? document.getElementById("header")?.clientHeight
    : 68;
  const hightBody = window.innerHeight - headerHeight - 50;
  return (
    <Fragment>
      <Header />
      <div className="body" style={{ height: hightBody }}>
        {children}
      </div>
      <Footer />
    </Fragment>
  );
};

export default Layout;
