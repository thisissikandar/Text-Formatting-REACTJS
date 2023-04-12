import React from "react";
import HeroBanner from "./heroBanner/HeroBanner";
import "./style.scss";
import Trending from "./trending/Trending";
import Popular from "./popular/Popular";
import TopRated from "./topRated/TopRated";
import Anime from "./anime/Anime";
const Home = () => {
  return (
    <div className="homePage">
      <HeroBanner />
        <Trending/>
        <Popular/>
        <TopRated/>
        {/* <Anime/> */}
    </div>
  );
};

export default Home;
