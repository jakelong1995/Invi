import React from "react";
import Header from "../common/Header";
import Footer from "./../common/Footer";
import EventHomeStructure from "../common/EventCard/EventHomeStructure";

const Home = () => {
  return (
    <div className="mx-auto p-4 flex flex-col items-center min-h-screen gap-4">
      <Header />
      <div className="w-full max-w-4xl">
        <EventHomeStructure />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
