"use client";

import { redirect } from "@/lib/redirect";
import { signIn } from "next-auth/react";
import { useState } from "react";

export function SignIn() {
  const [email, setEmail] = useState<string>("");
  const onEmailChange = ({ target }: { target: HTMLInputElement }) =>
    setEmail(target.value);

  const [password, setPassword] = useState<string>("");
  const onPasswordChange = ({ target }: { target: HTMLInputElement }) =>
    setPassword(target.value);

  const [passwordConfirmation, setPasswordConfirmation] = useState<string>("");
  const onPasswordConfirmationChange = ({
    target,
  }: {
    target: HTMLInputElement;
  }) => setPasswordConfirmation(target.value);

  const [error, setError] = useState<string>("");

  const submit = async () => {
    if (password !== passwordConfirmation) {
      setError("パスワードが一致しません");
      return;
    }
    const response = await fetch("/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    if (response.status === 200) {
      redirect("/");
    } else {
      setError("登録に失敗しました");
    }
  };

  return (
    <div className="h-full w-full flex justify-center items-center">
      <div className="rounded-md p-4 border-gray-400 border-2 container sm:max-w-md">
        <div className="text-center my-2 mb-4 font-bold">ログイン</div>
        {/* <div className="flex flex-row">
          <div className="flex flex-col px-4">
            <div className="py-2 h-16">Email</div>
            <div className="py-2 h-16">パスワード</div>
            <div className="py-2 h-16">パスワード確認</div>
          </div>
          <div className="flex flex-col px-4">
            <div className="py-2 h-16">
              <input
                type="email"
                placeholder="email@example.com"
                value={email}
                onChange={onEmailChange}
                className="border-2 border-gray-400 rounded-md p-1"
              ></input>
            </div>
            <div className="py-2 h-16">
              <input
                type="password"
                value={password}
                onChange={onPasswordChange}
                className="border-2 border-gray-400 rounded-md p-1"
              ></input>
            </div>
            <div className="py-2 h-16">
              <input
                type="password"
                value={passwordConfirmation}
                onChange={onPasswordConfirmationChange}
                className="border-2 border-gray-400 rounded-md p-1"
              ></input>
            </div>
          </div>
        </div>
        <div className="text-center">
          <button
            type="button"
            className="bg-gray-200 p-2 px-4 rounded-lg hover:bg-gray-300"
            onClick={submit}
          >
            登録
          </button>
        </div>
        {error && (
          <div className="text-center text-red-500 py-4 font-bold">{error}</div>
        )} */}
        <div className="text-center">
          <button
            type="button"
            className="bg-gray-200 p-2 px-4 rounded-lg hover:bg-gray-300"
            onClick={() => signIn("google", { callbackUrl: "/" })}
          >
            Googleアカウントでログイン
          </button>
        </div>
      </div>
    </div>
  );
}
