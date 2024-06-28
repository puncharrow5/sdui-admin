import { ChildStyleEntity } from "@/graphql/generated/types";
import styled from "styled-components";

export const Container = styled.div<{ $childStyle?: ChildStyleEntity }>`
  display: flex;
  flex-direction: column;
  width: ${({ $childStyle }) => $childStyle?.width || "100%"};
  height: ${({ $childStyle }) => $childStyle?.height || "100%"};
  margin: ${({ $childStyle }) => $childStyle?.margin ?? "0"};
  padding: ${({ $childStyle }) => $childStyle?.padding ?? "0"};
  border: ${({ $childStyle }) => $childStyle?.border ?? "0"};
  border-radius: ${({ $childStyle }) => $childStyle?.borderRadius ?? "0"};
  background-size: cover;
  background-position: center;
`;

export const Image = styled.img<{ $childStyle?: ChildStyleEntity }>`
  width: ${({ $childStyle }) => $childStyle?.width || "100%"};
  height: ${({ $childStyle }) => $childStyle?.height || "100%"};
  margin: ${({ $childStyle }) => $childStyle?.margin ?? "0"};
`;
