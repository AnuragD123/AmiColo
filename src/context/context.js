// context/user.js
"use client";
import { createContext, useContext, useState, useEffect } from "react";
import io from "socket.io-client";
// Creating the user context
const UserContext = createContext();

// Making the function which will wrap the whole app using Context Provider
export default function AppStore({ children }) {
  const [socket, setSocket] = useState(null);
  const [user, setUser] = useState();

  const allowedOrigins = process.env.Socket_URL;
  // const allowedOrigins = "https://websocket.futuregeek.tech";

  useEffect(() => setSocket(io(allowedOrigins)), []);

  const URL = allowedOrigins;

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        URL,
        socket,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

// Make useUserContext Hook to easily use our context throughout the application
export function useUserContext() {
  return useContext(UserContext);
}
