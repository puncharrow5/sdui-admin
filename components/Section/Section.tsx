import React from "react";
import { ComponentEntity } from "@/graphql/generated/types";
import * as S from "./Section.style";

interface Props {
  id: string;
  data: ComponentEntity;
}

export const Section = ({ data, id }: Props) => {
  return (
    <div
      id={id}
      className={`flex flex-col justify-center items-center text-center w-full min-h-[754px] h-full`}
      style={{ backgroundColor: data.background ?? "#FFF" }}
    >
      <S.Title titleStyle={data.titleStyle ?? undefined}>{data.title}</S.Title>
      <S.Content
        contentStyle={data.contentStyle ?? undefined}
        dangerouslySetInnerHTML={{ __html: data.content as TrustedHTML }}
      />
    </div>
  );
};
