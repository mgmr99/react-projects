import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("https://api.github.com/users/mgmr99")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setData(data);
  //     });
  // }, []);
  const data = useLoaderData();

  return (
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <img
              src={
                data.avatar_url
                  ? data.avatar_url
                  : "https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
              }
              alt="image"
            />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
              Your Github Information:
            </h2>
            <p className="mt-6 text-gray-600">
              <span className="text-1xl text-gray-800 md:text-2xl">
                Repositories:{" "}
              </span>
              {data.public_repos}
              {console.log(data.followers)}
            </p>
            <p className="mt-4 text-gray-600">
              <span className="text-1xl text-gray-800 md:text-2xl">Bio: </span>
              {data.bio ? data.bio : "Loading........"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Github;

export const getGitData = async function getGitData() {
  const response = await fetch("https://api.github.com/users/mgmr99");
  return response.json();
};
