import React, { useEffect, useState } from "react";
import {
  BackgroundType,
  ChildEntity,
  ComponentEntity,
  ComponentMobileStyleEntity,
  ComponentStyleEntity,
} from "@/graphql/generated/types";
import * as S from "./Section.style";
import { Child } from "../Child";

interface Props {
  data: ComponentEntity;
  id: string;
  isMobile: boolean;
}

export const Section = ({ data, id, isMobile }: Props) => {
  const [componentStyle, setComponentStyle] = useState<
    ComponentStyleEntity | ComponentMobileStyleEntity | null
  >(null);

  useEffect(() => {
    if (isMobile) {
      setComponentStyle(data.componentMobileStyle || null);
    } else {
      setComponentStyle(data.componentStyle || null);
    }
  }, [isMobile, data.componentMobileStyle, data.componentStyle]);

  return (
    <S.Container
      id={id}
      $height={componentStyle?.height || undefined}
      $padding={componentStyle?.padding || undefined}
      style={
        componentStyle?.backgroundType === BackgroundType.Color
          ? {
              backgroundColor: componentStyle.background ?? "#FFF",
            }
          : componentStyle?.backgroundType === BackgroundType.Image
          ? {
              backgroundImage:
                `url(${process.env.NEXT_PUBLIC_BASE_URL}/file/${componentStyle.background})` ??
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
