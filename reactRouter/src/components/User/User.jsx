import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const userid = useParams().userid;
  return (
    <div className="text-center bg-gray-600 p-10 text-3xl m-10">User: {userid}</div>
  );
}

export default User;
