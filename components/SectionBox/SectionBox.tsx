import React, { useState } from "react";
import { ComponentEntity } from "@/graphql/generated/types";
import * as S from "./SectionBox.style";

interface Props {
  data: ComponentEntity;
}

export const SectionBox = ({ data }: Props) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <S.Container>
      <S.SectionName>
        <p>{data.name}</p>
        <p onClick={handleClick} className="cursor-pointer">
          버튼
        </p>
      </S.SectionName>
      {open && (
        <S.Detail>
          <S.ItemBox>
            <p>제목</p>
            <p>{data.title}</p>
          </S.ItemBox>
        </S.Detail>
      )}
    </S.Container>
  );
};
