"use client";
import { createContext } from "react";
import { IAuthContextDto } from "@/shared/models/dto/auth-context.dto";

export const AuthContext = createContext<IAuthContextDto | undefined>(
  undefined
);
