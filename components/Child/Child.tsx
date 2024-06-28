import React from "react";
import * as S from "./Child.style";
import { BackgroundType, ChildEntity, ChildType } from "@/graphql/generated/types";

interface Props {
  data: ChildEntity;
}

export const Child = ({ data }: Props) => {
  if (data.childType === ChildType.Image) {
    return (
      <S.Image
        src={`${process.env.NEXT_PUBLIC_BASE_URL}/file/${data.childStyle?.background}`}
        $childStyle={data.childStyle ?? undefined}
        alt="로고 이미지"
      />
    );
  } else {
    return (
      <S.Container
        $childStyle={data.childStyle ?? undefined}
        style={
          data.childStyle?.backgroundType === BackgroundType.Color
            ? {
                backgroundColor: data.childStyle?.background ?? "#FFF",
              }
            : data.childStyle?.backgroundType === BackgroundType.Image
            ? {
                backgroundImage:
                  `url(${process.env.NEXT_PUBLIC_BASE_URL}/file/${data.childStyle.background})` ??
                  "none",
              }
            : undefined
        }
      ></S.Container>
    );
  }
};
