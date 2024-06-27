import styled from "styled-components";
import { ContentStyleEntity, TitleStyleEntity } from "@/graphql/generated/types";

export const Container = styled.div<{ $height?: string; $padding?: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: ${({ $height }) => $height ?? "754px"};
  padding: ${({ $padding }) => $padding ?? "0"};
  background-size: cover;
`;

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
