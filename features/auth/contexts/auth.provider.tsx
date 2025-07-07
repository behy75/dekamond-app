"use client";

import { useEffect, useState } from "react";
import { IUserDto } from "@/shared/models/dto/user.dto";
import { IAuthContextDto } from "@/shared/models/dto/auth-context.dto";
import { AuthContext } from "../contexts/auth.context";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<IUserDto | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setIsInitialized(true);
  }, []);

  const login = (user: IUserDto) => {
    localStorage.setItem("user", JSON.stringify(user));
    setUser(user);
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  const value: IAuthContextDto = {
    user,
    login,
    logout,
    isInitialized,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
