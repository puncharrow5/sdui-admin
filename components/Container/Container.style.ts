import styled from "styled-components";

export const Container = styled.div<{ $paddingTop?: number | null }>`
  display: flex;
  flex-direction: column;
  width: calc(100% - 400px);
  padding-top: ${({ $paddingTop }) => $paddingTop ?? 80}px;
`;
