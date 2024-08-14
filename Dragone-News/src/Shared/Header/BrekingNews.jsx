import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BrekingNews = () => {
  return (
    <div className="flex">
      <button className="btn btn-danger btn-secondary">Breaking News</button>
      <Marquee pauseOnHover={true} speed={200}>
        <Link className="mt-12" to="/">
         
          I can be a React component, multiple React components, or just some
          text..............
        </Link>
        <Link className="mr-12" to="/">
         
          I can be a React component, multiple React components, or just some
          text..........
        </Link>
        <Link className="mr-12" to="/">
         
          I can be a React component, multiple React components, or just some
          text.
        </Link>
      </Marquee>
    </div>
  );
};

export default BrekingNews;
