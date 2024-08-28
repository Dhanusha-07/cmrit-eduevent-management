import React, { createContext, useEffect, useState } from "react";
import axios from 'axios';

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!user) {
      axios.get('/profile')
        .then(({ data }) => setUser(data))
        .catch(error => setError(error.message)); // Handle network errors
    }
  }, [user]); // Make sure to include user as a dependency to prevent infinite loop

  return (
    <UserContext.Provider value={{ user, setUser, error }}>
      {children}
    </UserContext.Provider>
  );
}
