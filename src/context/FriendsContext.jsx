"use client";

import { createContext, useContext, useState, useEffect } from "react";

const FriendsContext = createContext();

export const FriendsProvider = ({ children }) => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const fetchFriends = async () => {
      const res = await fetch("/friends.json");
      const data = await res.json();
      setFriends(data);
    };

    fetchFriends();
  }, []);

  return (
    <FriendsContext.Provider value={{ friends }}>
      {children}
    </FriendsContext.Provider>
  );
};

// custom hook (clean usage)
export const useFriends = () => useContext(FriendsContext);
