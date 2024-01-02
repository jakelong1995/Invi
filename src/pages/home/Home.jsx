import React from "react";
import Header from "../common/Header";
import Footer from "./../common/Footer";
import EmptyEvent from "../no-event/EmptyEvent";

const Home = () => {
  return (
    <div>
      <Header />
      <EmptyEvent />
      <Footer />
    </div>
  );
};

export default Home;
