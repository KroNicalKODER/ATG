import React, { createContext, useState } from 'react';

export const UserContext = createContext()
const UserProvider = ({ children }) => {
  
  const [username, setUsername] = useState('');

  const updateUser = (newUsername) => {
    setUsername(newUsername);
  };

  return (
    <UserContext.Provider value={{ username, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
