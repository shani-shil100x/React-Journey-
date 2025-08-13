import React from "react";
import { data } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";

const Github = () => {
  const data = useLoaderData();
  
  /**
   const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/shani-shil100x")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, []);
 */

  return (
    <div className="bg-gray-700 text-white text-center p-4">
      Github Followers:{data.followers}
      <img src={data.avatar_url} width={300} />
    </div>
  );
};

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/shani-shil100x");
  return response.json();
};
