"use client";

import { useAuth } from "@/features/auth/hooks/auth-context.hook";
import styles from "./Header.module.scss";
import { useRouter } from "next/navigation";

export default function Header() {
  const { user, logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push("/auth");
  };

  return (
    <header className={styles.header}>
      <div className={styles.right}>
        <span>
          خوش اومدی، <strong>{user?.name}</strong>
        </span>
      </div>
      <button onClick={handleLogout} className={styles.logoutButton}>
        خروج
      </button>
    </header>
  );
}
