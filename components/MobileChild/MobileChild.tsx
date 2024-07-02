import React from "react";
import { BackgroundType, ChildType, MobileChildEntity } from "@/graphql/generated/types";
import * as S from "./MobileChild.style";

interface Props {
  data: MobileChildEntity;
}

export const MobileChild = ({ data }: Props) => {
  if (data.childType === ChildType.Image) {
    return (
      <S.Image
        src={`${process.env.NEXT_PUBLIC_BASE_URL}/file/${data.mobileChildStyle?.background}`}
        $mobileChildStyle={data.mobileChildStyle ?? undefined}
        alt="로고 이미지"
      />
    );
  } else {
    return (
      <S.Container
        $mobileChildStyle={data.mobileChildStyle ?? undefined}
        style={
          data.mobileChildStyle?.backgroundType === BackgroundType.Color
            ? {
                backgroundColor: data.mobileChildStyle?.background ?? "#FFF",
              }
            : data.mobileChildStyle?.backgroundType === BackgroundType.Image
            ? {
                backgroundImage:
                  `url(${process.env.NEXT_PUBLIC_BASE_URL}/file/${data.mobileChildStyle.background})` ??
                  "none",
              }
            : undefined
        }
      ></S.Container>
    );
  }
};
