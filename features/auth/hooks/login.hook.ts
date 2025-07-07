import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { fetchRandomUser } from "../services/queries/auth.service";
import { useAuth } from "./auth-context.hook";

export const useLogin = () => {
  const { login } = useAuth();
  const router = useRouter();

  return useMutation({
    mutationFn: fetchRandomUser,
    onSuccess: (user) => {
      login(user);
      router.push("/dashboard");
    },
  });
};
