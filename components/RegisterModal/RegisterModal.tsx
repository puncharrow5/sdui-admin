import React from "react";
import * as S from "./RegisterModal.style";

export const RegisterModal = () => {
  return (
    <S.Backdrop>
      <S.Box>
        <S.FirstStep>
          <S.Button>
            <p>사이트 생성</p>
            <p>{`->`}</p>
          </S.Button>
          <S.Button>
            <p>사이트 연결</p>
            <p>{`->`}</p>
          </S.Button>
        </S.FirstStep>
      </S.Box>
    </S.Backdrop>
  );
};
