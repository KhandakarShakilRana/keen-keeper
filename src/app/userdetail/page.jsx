"use client";
import { useFriends } from "@/context/FriendsContext";
import React from "react";

const UserDetail = () => {
  const { friends } = useFriends();
  console.log(friends);
  return <div>{}</div>;
};

export default UserDetail;
