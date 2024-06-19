import { ContentStyleEntity, TitleStyleEntity } from "@/graphql/generated/types";
import styled from "styled-components";

export const Title = styled.h1<{ titleStyle?: TitleStyleEntity }>`
  font-weight: bold;
  font-size: ${({ titleStyle }) => (titleStyle?.textSize ? titleStyle.textSize : 40)}px;
  color: ${({ titleStyle }) => (titleStyle?.textColor ? titleStyle.textColor : "#000")};
  margin-top: ${({ titleStyle }) => (titleStyle?.marginTop ? titleStyle.marginTop : 0)}px;
  margin-bottom: ${({ titleStyle }) => (titleStyle?.marginBottom ? titleStyle.marginBottom : 0)}px;
  margin-right: ${({ titleStyle }) => (titleStyle?.marginRight ? titleStyle.marginRight : 0)}px;
  margin-left: ${({ titleStyle }) => (titleStyle?.marginLeft ? titleStyle.marginLeft : 0)}px;
`;

export const Content = styled.div<{ contentStyle?: ContentStyleEntity }>`
  font-size: ${({ contentStyle }) => (contentStyle?.textSize ? contentStyle.textSize : 40)}px;
  color: ${({ contentStyle }) => (contentStyle?.textColor ? contentStyle.textColor : "#000")};
  margin-top: ${({ contentStyle }) => (contentStyle?.marginTop ? contentStyle.marginTop : 0)}px;
  margin-bottom: ${({ contentStyle }) =>
    contentStyle?.marginBottom ? contentStyle.marginBottom : 0}px;
  margin-right: ${({ contentStyle }) =>
    contentStyle?.marginRight ? contentStyle.marginRight : 0}px;
  margin-left: ${({ contentStyle }) => (contentStyle?.marginLeft ? contentStyle.marginLeft : 0)}px;
`;
