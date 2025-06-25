import React from "react";
import { Slider } from "./layout/Slider";
import GarbagePost from "./layout/posts";
const HomePage = () => {
  return (
    <div>
      <Slider />
      <GarbagePost />
    </div>
  );
};

export default HomePage;
