import React, { ReactNode } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import * as S from "./style";

interface Props {
  children: ReactNode;
  buttonText?: string;
  onSubmit: () => void;
  onClose: () => void;
}

export const Modal = ({ children, buttonText, onSubmit, onClose }: Props) => {
  return (
    <S.Backdrop onClick={onClose}>
      <S.Box onClick={(e) => e.stopPropagation()}>
        <XMarkIcon onClick={onClose} className="absolute size-8 top-4 right-6 cursor-pointer" />
        {children}
        <S.Button onClick={onSubmit}>{buttonText ?? "확인"}</S.Button>
      </S.Box>
    </S.Backdrop>
  );
};
