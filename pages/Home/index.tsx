import React from "react";
import { styMainCard } from "@styles/home.style";

export const Homepage = () => {
  return (
    <>
      <div className={styMainCard}>
        <div className="title">
          <h1>Homepage</h1>
          <p>This page is responsive, adjust size to see the mobile version.</p>
        </div>
      </div>
      <div className={styMainCard}>
        <div className="title">
          <h1>Github</h1>
          <p>https://github.com/michael-tjoe/shipper-next</p>
        </div>
      </div>
      <div className={styMainCard}>
        <div className="title">
          <h1>Tech Stack</h1>
          <p>NextJs , EmotionJs, React Testing Library</p>
        </div>
      </div>
    </>
  );
};

export default Homepage;
