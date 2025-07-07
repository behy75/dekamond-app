"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/features/auth/hooks/auth-context.hook";

export default function Main() {
  const { user, isInitialized } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isInitialized && !user) {
      router.replace("/auth");
    }
  }, [isInitialized, user]);

  if (!isInitialized) return null;
  if (!user) return null;

  return <h1>خوش اومدی، {user.name}!</h1>;
}
