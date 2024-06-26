import styled from "styled-components";
import { ContentStyleEntity, TitleStyleEntity } from "@/graphql/generated/types";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  min-height: 754px;
`;

export const InquiryImage = styled.div`
  width: 50%;
  background-position: center;
  background-size: cover;
`;

export const InquiryBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 50%;
  padding: 80px;
  background-color: #f9f9f9;
`;

export const Title = styled.h1<{ $titleStyle?: TitleStyleEntity }>`
  font-weight: bold;
  margin: ${({ $titleStyle }) => $titleStyle?.margin ?? 0};
  color: ${({ $titleStyle }) => $titleStyle?.textColor ?? "#000"};
  font-size: ${({ $titleStyle }) => $titleStyle?.textSize ?? 40}px;
  line-height: ${({ $titleStyle }) => $titleStyle?.lineHeight ?? 1.2};
`;

export const Content = styled.div<{ $contentStyle?: ContentStyleEntity }>`
  margin: ${({ $contentStyle }) => $contentStyle?.margin ?? 0};
  color: ${({ $contentStyle }) => $contentStyle?.textColor ?? "#000"};
  font-size: ${({ $contentStyle }) => $contentStyle?.textSize ?? 16}px;
  line-height: ${({ $contentStyle }) => $contentStyle?.lineHeight ?? 1.2};
`;

export const Form = styled.div<{ $textSize?: number }>`
  display: flex;
  flex-direction: column;
  font-size: ${({ $textSize }) => $textSize ?? 16}px;
`;
