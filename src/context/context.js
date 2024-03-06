// context/user.js
"use client";
import { createContext, useContext, useState } from "react";
// Creating the user context
const UserContext = createContext();

// Making the function which will wrap the whole app using Context Provider
export default function AppStore({ children }) {

    const [user, setUser] = useState();

    return (
        <UserContext.Provider value={{
            user,
            setUser,
        }}>
            {children}
        </UserContext.Provider>
    );
}

// Make useUserContext Hook to easily use our context throughout the application
export function useUserContext() {
    return useContext(UserContext);
}