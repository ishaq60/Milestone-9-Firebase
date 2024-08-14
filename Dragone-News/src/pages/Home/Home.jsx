import React from "react";
import Header from "../../Shared/Header/Header";
import Navbar from "../../Shared/Navbar/Navbar";
import LeftsideNav from "../../Shared/Navbar/LeftsideNav";
import RightsideNav from "../../Shared/Navbar/RightsideNav/RightsideNav";
import BrekingNews from "../../Shared/Header/BrekingNews";
import { useLoaderData } from "react-router-dom";
import NewsCard from "../NewsCard";

const Home = () => {
  const news=useLoaderData()
  console.log(news);
  return (
    <div>
      <Header></Header>
      <BrekingNews></BrekingNews>
      <Navbar></Navbar>
     
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-8">
        <div className="border text-center">
          <LeftsideNav></LeftsideNav>
        </div>
{/**News Container */}
        <div className=" lg:col-span-2 border">
          <h2 className="text-4xl text-center">coming soon</h2>
          {
            news.map(anews=> <NewsCard key={anews.id} news={anews}></NewsCard> )
          }
        </div>

        <div className="border text-center">
          <RightsideNav></RightsideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
