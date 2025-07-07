"use client";

import Header from "@/shared/components/header";
import { usePathname } from "next/navigation";

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const showHeader = pathname !== "/auth";

  return (
    <>
      {showHeader && <Header />}
      {children}
    </>
  );
}
