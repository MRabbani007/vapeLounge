import React, { createContext, useState } from "react";

interface UserContextType {
  user: Partial<User>;
  handleAuth: (user: Partial<User>) => void;
  clearAuth: () => void;
  // increment: () => void;
  // decrement: () => void;
}

type Props = {
  children: React.ReactElement | React.ReactElement[];
};

const initialValue: UserContextType = {
  user: {
    username: "",
    roles: [],
  },
  handleAuth: () => {},
  clearAuth: () => {},
};

const UserContext = createContext<UserContextType | undefined>(initialValue);

export const UserProvider = ({ children }: Props) => {
  const [user, setUser] = useState({});

  const handleAuth = (user: Partial<User>) => {
    setUser(user);
  };

  const clearAuth = () => setUser({});

  // const increment = () => setCounter(counter + 1);
  // const decrement = () => setCounter(counter - 1);

  return (
    <UserContext.Provider value={{ user, handleAuth, clearAuth }}>
      {children}
    </UserContext.Provider>
  );
};

// export const useCounter = () => {
//   const context = useContext(CounterContext);
//   if (!context) {
//     throw new Error("useCounter must be used within a CounterProvider");
//   }
//   return context;
// };
