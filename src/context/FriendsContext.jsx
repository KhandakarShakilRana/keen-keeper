"use client";

import { createContext, useContext, useState, useEffect } from "react";

const FriendsContext = createContext();

export const FriendsProvider = ({ children }) => {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const fetchFriends = async () => {
      const res = await fetch("/friends.json");
      const data = await res.json();
      setFriends(data);
      setLoading(false);
    };

    fetchFriends();
  }, []);

  const addActivity = (friend, type) => {
    const newActivity = {
      id: Date.now(),
      name: friend.name,
      type, // call / text / video
      time: new Date().toLocaleString(),
    };

    setActivities((prev) => [newActivity, ...prev]);
  };

  return (
    <FriendsContext.Provider value={{ friends , loading , activities , addActivity }}>
      {children}
    </FriendsContext.Provider>
  );
};

// custom hook (clean usage)
export const useFriends = () => useContext(FriendsContext);
