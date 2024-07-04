import React, { ReactNode } from "react";
import * as S from "./style";

interface Props {
  children: ReactNode;
  paddingTop?: number;
}

export const Container = ({ children, paddingTop }: Props) => {
  return <S.Container paddingTop={paddingTop}>{children}</S.Container>;
};
