import { MobileChildStyleEntity } from "@/graphql/generated/types";
import styled from "styled-components";

export const Container = styled.div<{ $mobileChildStyle?: MobileChildStyleEntity }>`
  display: flex;
  flex-direction: column;
  width: ${({ $mobileChildStyle }) => $mobileChildStyle?.width || "100%"};
  height: ${({ $mobileChildStyle }) => $mobileChildStyle?.height || "100%"};
  margin: ${({ $mobileChildStyle }) => $mobileChildStyle?.margin ?? "0"};
  padding: ${({ $mobileChildStyle }) => $mobileChildStyle?.padding ?? "0"};
  border: ${({ $mobileChildStyle }) => $mobileChildStyle?.border ?? "0"};
  border-radius: ${({ $mobileChildStyle }) => $mobileChildStyle?.borderRadius ?? "0"};
  background-size: cover;
  background-position: center;
`;

export const Image = styled.img<{ $mobileChildStyle?: MobileChildStyleEntity }>`
  width: ${({ $mobileChildStyle }) => $mobileChildStyle?.width || "100%"};
  height: ${({ $mobileChildStyle }) => $mobileChildStyle?.height || "100%"};
  margin: ${({ $mobileChildStyle }) => $mobileChildStyle?.margin ?? "0"};
`;
