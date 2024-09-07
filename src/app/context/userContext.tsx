"use client"
import React , {createContext, useState, ReactNode ,Dispatch, SetStateAction} from "react";
interface User{
    id: string,
    email: string,
    userName: string,
}
interface UserContextType{
  user : User | null;
  setUser : Dispatch<SetStateAction <User | null>>
}
const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    return (
      <UserContext.Provider value={{ user, setUser }}>
        {children}
      </UserContext.Provider>
    );
  };