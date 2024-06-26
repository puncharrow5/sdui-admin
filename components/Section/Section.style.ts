import { ContentStyleEntity, TitleStyleEntity } from "@/graphql/generated/types";
import styled from "styled-components";

export const Title = styled.h1<{ $titleStyle?: TitleStyleEntity }>`
  font-weight: bold;
  margin: ${({ $titleStyle }) => $titleStyle?.margin ?? 0};
  color: ${({ $titleStyle }) => $titleStyle?.textColor ?? "#000"};
  font-size: ${({ $titleStyle }) => $titleStyle?.textSize ?? 60}px;
  line-height: ${({ $titleStyle }) => $titleStyle?.lineHeight ?? 1.2};
`;

export const Content = styled.div<{ $contentStyle?: ContentStyleEntity }>`
  margin: ${({ $contentStyle }) => $contentStyle?.margin ?? 0};
  color: ${({ $contentStyle }) => $contentStyle?.textColor ?? "#000"};
  font-size: ${({ $contentStyle }) => $contentStyle?.textSize ?? 20}px;
  line-height: ${({ $contentStyle }) => $contentStyle?.lineHeight ?? 1.2};
`;
