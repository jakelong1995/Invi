import React from "react";
import Header from "../common/Header";
import Footer from "./../common/Footer";
import EmptyEvent from "../no-event/EmptyEvent";
import UpcomingEvent from "./UpcomingEvent";
import PastEvent from "./PastEvent";

const Home = () => {
  return (
    <div>
      <Header />
      {/* <EmptyEvent /> */}
      <UpcomingEvent />
      {/* <PastEvent /> */}
      <Footer />
    </div>
  );
};

export default Home;
