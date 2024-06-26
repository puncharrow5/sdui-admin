import styled from "styled-components";

export const Header = styled.div<{
  $textSize?: number | null;
  $textColor?: string | null;
  $backgrounColor?: string | null;
}>`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  width: calc(100% - 400px);
  top: 0;
  padding: 0 40px;
  font-size: ${({ $textSize }) => $textSize ?? 20}px;
  font-weight: bold;
  color: ${({ $textColor }) => $textColor ?? "#000"};
  background-color: ${({ $backgrounColor }) => $backgrounColor ?? "transparent"};
  border-bottom: 2px solid #e7e7ec;
`;
