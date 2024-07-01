import React from "react";
import { BackgroundType, ChildEntity, ComponentEntity } from "@/graphql/generated/types";
import * as S from "./MobileSection.style";
import { Child } from "../Child";

interface Props {
  data: ComponentEntity;
  id: string;
  isMobile: boolean;
}

export const MobileSection = ({ data, id, isMobile }: Props) => {
  return (
    <S.Container
      id={id}
      $height={data.componentMobileStyle?.height || undefined}
      $padding={data.componentMobileStyle?.padding || undefined}
      style={
        data.componentMobileStyle?.backgroundType === BackgroundType.Color
          ? {
              backgroundColor: data.componentMobileStyle.background ?? "#FFF",
            }
          : data.componentMobileStyle?.backgroundType === BackgroundType.Image
          ? {
              backgroundImage:
                `url(${process.env.NEXT_PUBLIC_BASE_URL}/file/${data.componentMobileStyle.background})` ??
                "none",
            }
          : undefined
      }
    >
      <S.Title $titleStyle={data.titleStyle ?? undefined}>{data.title}</S.Title>
      <S.Content
        $contentStyle={data.contentStyle ?? undefined}
        dangerouslySetInnerHTML={{ __html: data.content ?? "" }}
      />
      <S.ChildrenBox>
        {data.children &&
          data.children.map((value: ChildEntity, index: number) => (
            <Child key={index} data={value} />
          ))}
      </S.ChildrenBox>
    </S.Container>
  );
};
