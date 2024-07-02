import styled from "styled-components";
import { ContentStyleEntity, TitleStyleEntity } from "@/graphql/generated/types";

export const Container = styled.div<{ $height?: string; $padding?: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: ${({ $height }) => $height ?? "754px"};
  padding: ${({ $padding }) => $padding ?? 0};
`;

export const InquiryBox = styled.div`
  display: flex;
  justify-content: start;
  padding: 80px;
  background-color: #f9f9f9;
`;

export const Title = styled.h1<{ $titleStyle?: TitleStyleEntity }>`
  font-weight: bold;
  margin: ${({ $titleStyle }) => $titleStyle?.mobileMargin ?? 0};
  color: ${({ $titleStyle }) => $titleStyle?.color ?? "#000"};
  font-size: ${({ $titleStyle }) => $titleStyle?.mobileSize ?? 40}px;
  line-height: ${({ $titleStyle }) => $titleStyle?.mobileLineHeight ?? 1.2};
`;

export const Content = styled.div<{ $contentStyle?: ContentStyleEntity }>`
  margin: ${({ $contentStyle }) => $contentStyle?.mobileMargin ?? 0};
  color: ${({ $contentStyle }) => $contentStyle?.color ?? "#000"};
  font-size: ${({ $contentStyle }) => $contentStyle?.mobileSize ?? 16}px;
  line-height: ${({ $contentStyle }) => $contentStyle?.mobileLineHeight ?? 1.2};
`;

export const Form = styled.div<{ $textSize?: number }>`
  display: flex;
  flex-direction: column;
  font-size: ${({ $textSize }) => $textSize ?? 16}px;
`;
