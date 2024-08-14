
import React, { ReactNode, createContext, useState } from 'react';

interface ContextType {
  value: string;
  setValue: (value: string) => void;
}

const initialValue: ContextType = {
  value: "",
  setValue: () => {},
};

const AuthContext = createContext<ContextType>(initialValue);

interface AuthContextProviderProps {
  children: ReactNode;
}

export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({ children }) => {
  const [value, setValue] = useState<string>("start");

  return (
    <AuthContext.Provider value={{ value, setValue }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;