"use client";

import React, { useState } from "react";
import { useRouter } from "next/router";
import { useToastMessage } from "@/hooks";
import { LoginMutationVariables, useLoginMutation } from "@/graphql/generated/types";
import * as S from "./LoginForm.style";
import { BeatLoader } from "react-spinners";

export const LoginForm = () => {
  const router = useRouter();
  const { ToastMessage } = useToastMessage();

  const [variables, setVariables] = useState<LoginMutationVariables>({
    email: "",
    password: "",
  });

  const [loadLogin, { loading }] = useLoginMutation({
    onCompleted: () => {
      router.push("/dashboard");
    },
    onError: (e) => {
      ToastMessage("error", e.message ?? e);
    },
  });
  if (loading) {
    return "로딩중...";
  }

  const handleLogin = () => {
    loadLogin({
      variables,
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setVariables({
      ...variables,
      [name]: value,
    });
  };

  return (
    <S.Container>
      <S.Box>
        <h1 className="mb-6 text-center text-3xl font-bold">로그인</h1>
        <S.Label>관리자 이메일</S.Label>
        <S.Input name="email" value={variables.email} onChange={handleChange} />
        <S.Label>비밀번호</S.Label>
        <S.Input
          name="password"
          value={variables.password}
          onChange={handleChange}
          autoComplete="off"
          type="password"
        />
        <S.Button onClick={handleLogin}>
          {loading ? <BeatLoader size={10} speedMultiplier={0.75} color="#FFF" /> : <p>로그인</p>}
        </S.Button>
      </S.Box>
    </S.Container>
  );
};
