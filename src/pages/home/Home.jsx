import React from "react";
import Header from "../common/Header";
import Footer from "./../common/Footer";
import EventHomeStructure from "../common/EventCard/EventHomeStructure";

const Home = () => {
  return (
    <div className="mx-auto p-4 flex flex-col items-center">
      <Header />
      <EventHomeStructure />
      <Footer />
    </div>
  );
};

export default Home;
