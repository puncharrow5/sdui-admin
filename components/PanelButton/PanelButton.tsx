import React from "react";
import * as S from "./PanelButton.style";

interface Props {
  text: string;
  textColor?: string;
  color?: string;
  onClick: () => void;
}

export const PanelButton = ({ text, textColor, color, onClick }: Props) => {
  return (
    <S.Button $color={color} $textColor={textColor} onClick={onClick}>
      {text}
    </S.Button>
  );
};
