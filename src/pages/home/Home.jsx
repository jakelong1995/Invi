import React from "react";

const Home = () => {
  return (<div>
    <div>Welcome to INVI</div>
    <div>{localStorage.getItem('userName')}</div>
  </div>);
};

export default Home;
