import React from "react";
import { BackgroundType, ComponentEntity } from "@/graphql/generated/types";
import * as S from "./Section.style";

interface Props {
  id: string;
  data: ComponentEntity;
}

export const Section = ({ data, id }: Props) => {
  return (
    <S.Container
      id={id}
      $height={data.componentStyle?.height || undefined}
      $padding={data.componentStyle?.padding || undefined}
      style={
        data.componentStyle?.backgroundType === BackgroundType.Color
          ? {
              backgroundColor: data.componentStyle.background ?? "#FFF",
            }
          : data.componentStyle?.backgroundType === BackgroundType.Image
          ? {
              backgroundImage:
                `url(${process.env.NEXT_PUBLIC_BASE_URL}/file/${data.componentStyle.background})` ??
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
    </S.Container>
  );
};
