"use client";

import { useState } from "react";
import { validatePhone } from "@/utils/validate-phone.utils";
import { formatPhoneNumber } from "@/utils/format-phone.utils";
import { unformatPhoneNumber } from "@/utils/unformat-phone.utils";
import { useLogin } from "../../hooks/login.hook";
import styles from "./sign-in.module.scss";
import BaseInput from "@/shared/components/base-input";
import BaseButton from "@/shared/components/base-button";

export default function SignIn() {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const loginMutation = useLogin();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = unformatPhoneNumber(e.target.value);
    setPhone(rawValue);
  };

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!validatePhone(phone)) {
      setError("شماره وارد شده معتبر نیست");
      return;
    }
    setError("");
    loginMutation.mutate();
  };

  return (
    <div className={styles.container}>
      <form className={styles.card} onSubmit={handleSubmit}>
        <h2>ورود</h2>
        <BaseInput
          label="شماره تلفن"
          value={formatPhoneNumber(phone)}
          onChange={handleChange}
          placeholder="0918-639-39-84"
          dir="ltr"
        />
        {error && <p className={styles.error}>{error}</p>}
        <BaseButton type="submit" disabled={loginMutation.isPending}>
          {loginMutation.isPending ? "در حال ورود..." : "ورود"}
        </BaseButton>
      </form>
    </div>
  );
}
