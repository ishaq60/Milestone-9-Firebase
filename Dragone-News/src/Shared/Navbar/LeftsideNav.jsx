import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftsideNav = () => {
  const [catagories, setcatagories] = useState([]);
  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setcatagories(data));
  }, []);
  return (
    <div className="space-y-12">
      <h2 className="text-2xl">All Category:{catagories.length}</h2>
      {catagories.map((category) => (
        <Link to={`/category/${category.id}`} className="block font-semibold"
         key={category.id}>
         {category.name}
        </Link>
      ))}
    </div>
  );
};

export default LeftsideNav;
