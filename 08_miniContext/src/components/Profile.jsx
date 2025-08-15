import React, { useContext } from "react";
import UserContext from "../context/UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);
  if (!user) return <div className="text-center">please login</div>;
  return (
    <div className="text-center text-2xl font-bold ">
      Welcome: {user.username.toUpperCase()}
    </div>
  );
};

export default Profile;
