import styled from "styled-components";

export const Header = styled.div<{
  $height?: number | null;
  $textSize?: number | null;
  $textColor?: string | null;
  $backgroundColor?: string | null;
}>`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: calc(100% - 400px);
  height: ${({ $height }) => $height ?? 80}px;
  top: 0;
  padding: 0 40px;
  font-size: ${({ $textSize }) => $textSize ?? 20}px;
  font-weight: bold;
  color: ${({ $textColor }) => $textColor ?? "#000"};
  background-color: ${({ $backgroundColor }) => $backgroundColor ?? "transparent"};
  border-bottom: 1px solid #e7e7ec;
`;

export const Logo = styled.img<{
  $logoSize?: string | null;
}>`
  height: ${({ $logoSize }) => $logoSize ?? "100%"};
  cursor: pointer;
`;
